const express = require("express");
const app = express();
const { Pool } = require("pg"); // postgres
const secrets = require("./secrets.json");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json());

const pool = new Pool({
  ...secrets,
  ssl: {
    rejectUnauthorized: false,
  },
});

// GET "/rating/{id}?" : id is optional. If not provided will just return all ratings
app.get("/ratings/:id?", async (req, res) => {
  const query = `SELECT dislikes, likes FROM ratings`;
  const { id } = req.params;

  if (id === undefined) {
    const { rows } = await pool.query(`${query};`);
    return res.json(rows);
  }

  const { rows } = await pool.query(`${query} WHERE id = $1;`, [id]);

  rows.length === 0
    ? res
        .status(400)
        .json({ success: false, message: `No row with id of ${id} was found` })
    : res.json(rows);
});

app.post("/ratings/update/:id?", async (req, res) => {
  // can use param or req.body for rating_id
  const { dislikes, likes } = req.body;
  const id = req.body.rating_id || parseInt(req.params.id); // req.body is prioritized
  const params = [id];
  let query = `UPDATE ratings SET `;

  console.log(req.body);

  const { rows } = await pool.query(
    `SELECT EXISTS(SELECT id FROM ratings WHERE id = $1);`,
    [id]
  );

  if (rows[0].exists) {
    const createString = function (values, strings) {
      // loop through each of the values checking if they are valid
      const queries = values
        .map((value, index) => {
          if (typeof value === "number" && value > 0) {
            const length = params.push(value);
            return `${strings[index]} = $` + length + ", ";
          }
        })
        .join("");

      // if both likes and dislikes are not valid return false.
      if (!queries) return false;

      // if likes || dislikes is valid return the full query, still works if both are provided but only one is valid
      return query.concat(
        queries.slice(0, queries.length - 2),
        " WHERE ID = $1 RETURNING *;"
      );
    };

    query = createString([dislikes, likes], ["dislikes", "likes"]);
    // checking if the return value is false
    if (query === false)
      return res
        .status(400)
        .json({ message: `Please provide the expected data` });

    const { rows } = await pool.query(query, params);
    return res.json(rows);
  }

  return res.status(400).json({ message: `No rows with id of ${id} found` });
});

// GET "/" : serves all rows from the database.
app.get("/:id?", async (req, res) => {
  const query = `SELECT ratings.id, title, description, photo_path, ratings.likes, ratings.dislikes FROM photos INNER JOIN ratings ON photos.rating_id = ratings.id`;
  const { id } = req.params;

  if (id === undefined) {
    const { rows } = await pool.query(`${query};`);
    return res.json(rows);
  }

  const { rows } = await pool.query(`${query} WHERE rating_id = $1;`, [id]);

  rows.length === 0
    ? res.status(400).json({ message: `No row with id of ${id} was found` })
    : res.json(rows);
});

app.post("/:id?", async (req, res) => {
  // can use param or req.body for game_id. Req.body is prioritized
  const { title, description, photo_path } = req.body;
  const id = req.body.game_id || parseInt(req.params.id); // we need both in ints

  // verify : title, description and photo_path - all strings.
  // might auto generate photo_path.
  // title and description are needed

  res.json(id);
});

app.listen(5012, console.log("Server is listening on port 5012!"));

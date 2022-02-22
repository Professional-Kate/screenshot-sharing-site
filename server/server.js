const express = require("express");
const app = express();
const { Pool } = require("pg"); // postgres
const secrets = require("./secrets.json");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());

const pool = new Pool({
  ...secrets,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/", async (req, res) => {
  const { rows } = await pool.query(
    "SELECT id, title, description, photo_path FROM photos;"
  );

  res.json(rows);
});

// can use param or req.body for game_id. Req.body is prioritized
app.post("/:id?", async (req, res) => {
  const { title, description, photo_path } = req.body;
  const id = req.body.game_id || parseInt(req.params.id); // we need both in ints

  // verify : title, description and photo_path - all strings.
  // might auto generate photo_path.
  // title and description are needed

  res.json(id);
});

app.listen(5000, console.log("Server is listening on port 5000!"));

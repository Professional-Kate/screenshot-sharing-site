const express = require("express");
const app = express();
const { Pool } = require("pg"); // postgres
const secrets = require("./secrets.json");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const pool = new Pool({
  ...secrets,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/", async (req, res) => {
  const { rows } = await pool.query(
    "SELECT title, description, photo_path FROM photos;"
  );

  res.json(rows);
});

app.listen(5000, console.log("Server is listening on port 5000!"));

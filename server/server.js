const express = require("express");
const app = express();
const { Pool } = require("pg"); // postgres

const pool = new Pool({});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(5000, console.log("Server is listening on port 5000!"));

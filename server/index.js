const Express = require("express");
const path = require("path");
const app = Express();
const axios = require("axios");
const React = require("react");
const ReactDOM = require("react-dom");
const Sequelize = require("sequelize");
const { db, User } = require("./../database/db");
const PORT = 8080;

app.use(Express.urlencoded({ extended: false }));
app.use(Express.json());
app.use(Express.static(path.resolve(__dirname, "..", "public")));
app.get("/", (req, res, next) => {
  res.sendFile("index.html");
});

app.get("/api/users", (req, res, next) => {
  User.findAll()
    .then(result => res.json(result))
    .catch(e => {
      console.error(e);
    });
});

// app.put('/api/users/:id', (req, res, next) => {

// })

db.sync({ force: true })
  .then(() => {
    console.log("We are synced");
    return Promise.all([
      User.create({ name: "Moe" }),
      User.create({ name: "Curly" }),
      User.create({ name: "Shep" }),
      User.create({ name: "Papa Smurf" })
    ]);
  })
  .then(() => {
    console.log(`Listening on port ${PORT}`);
    app.listen(PORT);
  })

  .catch(e => console.error(e));

module.exports = { React, ReactDOM, db, Sequelize };

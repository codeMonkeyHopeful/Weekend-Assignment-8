const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/homework", {
  logging: false
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

User.belongsTo(User, { as: "manager" });
module.exports = { User, db };

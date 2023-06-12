const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite3",
});

class Agent extends Sequelize.Model {}
Agent.init(
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    photoUrl: {
      type: Sequelize.STRING,
    },
    agentLicence: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    practiceAreas: {
      type: Sequelize.STRING,
    },
    aboutMe: {
      type: Sequelize.TEXT,
    },
  },
  {
    sequelize,
    modelName: "Agents",
    // options
  }
);

class Review extends Sequelize.Model {}
Review.init(
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Reviews",
    // options
  }
);

Agent.hasMany(Review, { as: "reviews", foreignKey: "agentId" });

module.exports = {
  sequelize,
  Agent,
  Review,
};

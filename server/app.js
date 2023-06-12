const express = require("express");
const { Agent } = require("./model");
const { Sequelize, Op } = require("sequelize");

const app = express();

app.use(express.json());

app.get("/agents", async (req, res, next) => {
  const { q } = req.query;
  let agents;
  if (q && typeof q == "string") {
    agents = await Agent.findAll({
      where: {
        practiceAreas: {
          [Op.like]: `%${q.trim()}%`,
        },
      },
    });
  } else {
    agents = await Agent.findAll();
  }

  return res.json(agents);
});

app.get("/agents/:id", async (req, res, next) => {
  const { id } = req.params;
  const agent = await Agent.findOne({ where: { id } });
  if (!agent) {
    return res.status(404);
  }
  return res.json(agent);
});

app.post("/agents", async (req, res, next) => {
  const agent = await Agent.create(req.body);
  return res.json(agent);
});

module.exports = app;

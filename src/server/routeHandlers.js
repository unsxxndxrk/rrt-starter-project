const buildSuccessfulResponsePayload = require("./utils/buildSuccessfulResponsePayload");
const _ = require("lodash");

const getUsers = (res, usersData) => {
  res.setHeader("Content-Type", "application/json");
  const shuffledData = _.shuffle(JSON.parse(usersData));
  res.end(JSON.stringify(buildSuccessfulResponsePayload(shuffledData)));
  res.end();
};

const getTodo = (res, todosData) => {
  res.setHeader("Content-Type", "application/json");
  const todoData = _.sample(JSON.parse(todosData));
  res.end(JSON.stringify(buildSuccessfulResponsePayload(todoData)));
  res.end();
};

const notFound = (res) => {
  res.writeHead(404, { "Content-type": "text/plain" });
  res.end();
};

exports.getUsers = getUsers;
exports.getTodo = getTodo;
exports.notFound = notFound;

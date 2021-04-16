const buildSuccessfulResponsePayload = require("./utils/buildSuccessfulResponsePayload");

const getUsers = (res, usersData) => {
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify(buildSuccessfulResponsePayload(JSON.parse(usersData))),
  );
  res.end();
};

const notFound = (res) => {
  res.writeHead(404, { "Content-type": "text/plain" });
  res.end();
};

exports.getUsers = getUsers;
exports.notFound = notFound;

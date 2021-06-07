const http = require("http");
const fs = require("fs");
const Routes = require("./Routes");
const Settings = require("./constants/settings");
const cors = require("./helpers/cors");
const routeHandlers = require("./routeHandlers");
const buildUrl = require("./utils/buildUrl");

const { getUsers, getTodo, notFound } = routeHandlers;

function serverHandler(req, res) {
  cors(req, res);

  const Url = new URL(buildUrl(req.url));
  const usersData = fs.readFileSync(Settings.USERS_PATH, "utf-8");
  const todosData = fs.readFileSync(Settings.TODOS_PATH, "utf-8");

  if (Url.pathname === Routes.Users) {
    getUsers(res, usersData);
  } else if (Url.pathname === Routes.Todo) {
    getTodo(res, todosData);
  } else {
    notFound(res);
  }
}

const server = http.createServer(serverHandler);
server.listen(Settings.PORT);
console.log(`Listening to port: ${Settings.PORT}`);

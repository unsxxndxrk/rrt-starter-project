const Settings = require("../constants/settings");

const buildUrl = (route) => `${Settings.ORIGIN}:${Settings.PORT}${route}`;

module.exports = buildUrl;

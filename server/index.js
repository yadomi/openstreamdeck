const { join } = require("path");
process.env.TS_NODE_PROJECT = join(__dirname, "tsconfig.json");
require("ts-node/register");

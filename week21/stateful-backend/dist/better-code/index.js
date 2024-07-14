"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const store_1 = require("./store");
// log state every 5 sec
(0, logger_1.startLogger)();
// updating state every 5 sec (realtime achieved by websockets)
setInterval(() => {
    store_1.manager.addGame(Math.random().toString());
}, 5000);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const store_1 = require("./store");
// log state every 5 sec
(0, logger_1.startLogger)();
// create a new game manager class instance
const gameManager = new store_1.GameManager();
// updating state every 5 sec (realtime achieved by websockets)
setInterval(() => {
    gameManager.addGame(Math.random().toString()); // this instance adds a new game
}, 5000);

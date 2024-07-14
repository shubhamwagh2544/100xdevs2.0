"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
// log state every 5 sec
(0, logger_1.startLogger)();
// updating state every 5 sec (realtime achieved by websockets)
setInterval(() => {
    store_1.games.push({
        id: Math.random().toString(),
        whitePlayerName: "Shubham",
        blackPlayerName: "Wagh",
        moves: []
    });
}, 5000);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const store_1 = require("./store");
// single instance of GameManager
const gamemanager = store_1.GameManager.getInstance();
function startLogger() {
    setInterval(() => {
        gamemanager.log();
    }, 5000);
}
exports.startLogger = startLogger;

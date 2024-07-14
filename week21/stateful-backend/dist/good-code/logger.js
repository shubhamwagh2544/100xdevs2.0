"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const store_1 = require("./store");
// another instance of game manager
const gameManager = new store_1.GameManager();
function startLogger() {
    setInterval(() => {
        gameManager.log(); // empty [] logs since this instance is not being updated
    }, 5000);
}
exports.startLogger = startLogger;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const store_1 = require("./store");
// another instance of game manager
function startLogger() {
    setInterval(() => {
        store_1.manager.log();
    }, 5000);
}
exports.startLogger = startLogger;

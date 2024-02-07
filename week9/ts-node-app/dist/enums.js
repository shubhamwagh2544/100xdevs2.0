"use strict";
function doX(input) {
    if (input === "LEFT") {
    }
}
doX("LEFT");
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
function doY(input) {
    if (input === Direction.LEFT) {
    }
}
doY(Direction.LEFT);
console.log(Direction.UP);
console.log(Direction.DOWN);
console.log(Direction.LEFT);
console.log(Direction.RIGHT);
var Dir;
(function (Dir) {
    Dir[Dir["UP"] = 20] = "UP";
    Dir[Dir["DOWN"] = 21] = "DOWN";
    Dir[Dir["LEFT"] = 22] = "LEFT";
    Dir[Dir["RIGHT"] = 23] = "RIGHT";
})(Dir || (Dir = {}));
console.log(Dir.DOWN);
console.log(Dir.LEFT);
console.log(Dir.RIGHT);
var Directions;
(function (Directions) {
    Directions["UP"] = "UP";
    Directions["DOWN"] = "DOWN";
    Directions["LEFT"] = "LEFT";
    Directions["RIGHT"] = "RIGHT";
})(Directions || (Directions = {}));
console.log(Directions.UP);
console.log(Directions.DOWN);
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["SUCCESS"] = 200] = "SUCCESS";
    ResponseStatus[ResponseStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    ResponseStatus[ResponseStatus["ERROR"] = 500] = "ERROR";
})(ResponseStatus || (ResponseStatus = {}));
console.log(ResponseStatus.NOT_FOUND);

// way to define set of named constants

// 1
type keyInput = "UP" | "DOWN" | "LEFT" | "RIGHT"

function doX(input: keyInput) {
    if (input === "LEFT") {
        // do something
    }
}

doX("LEFT")
//doX("OK")           // type safety is there but its not human-readable way to define constants


// 2
enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

function doY(input: Direction) {
    if (input === Direction.LEFT) {
        // do something
    }
}

doY(Direction.LEFT)     // readable and concise [no risk of using accidental invalid values]


// 3
console.log(Direction.UP)       // 0
console.log(Direction.DOWN)     // 1
console.log(Direction.LEFT)     // 2
console.log(Direction.RIGHT)    // 3


// 4
enum Dir {
    UP = 20,
    DOWN,               // auto-increment
    LEFT,
    RIGHT
}

console.log(Dir.DOWN)
console.log(Dir.LEFT)
console.log(Dir.RIGHT)


// 5
enum Directions {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

console.log(Directions.UP)
console.log(Directions.DOWN)


// 6 : common usecase
enum ResponseStatus {
    SUCCESS = 200,
    NOT_FOUND = 404,
    ERROR = 500
}

console.log(ResponseStatus.NOT_FOUND)
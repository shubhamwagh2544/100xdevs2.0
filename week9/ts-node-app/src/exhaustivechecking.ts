// exhaustive checking

interface Square {
    kind: 'square'
    size: number
}
interface Rectangle {
    kind: 'rectangle'
    width: number
    height: number
}
interface Circle {
    kind: 'circle'
    radius: number
}

type Shape = Square | Rectangle | Circle

function getArea1(shape: Shape): number {
    if (shape.kind === "square") {
        return shape.size * shape.size
    }
    else if (shape.kind === "rectangle") {
        return shape.width * shape.height
    }
    else {
        return Math.PI * shape.radius ** 2
    }
}
console.log(getArea1({ kind: 'square', size: 5 }))       // 25
console.log(getArea1({ kind: 'rectangle', width: 5, height: 3 }))       // 15
console.log(getArea1({ kind: 'circle', radius: 5 }))       // 78.53981633974483

function getArea2(shape: Shape): number {
    switch (shape.kind) {
        case "square":
            return shape.size * shape.size
        case "rectangle":
            return shape.width * shape.height
        case "circle":
            return Math.PI * shape.radius ** 2
        default:
            const _exhaustiveCheck: never = shape       // never : shape is never type since it's not any of the above 3 types
            return _exhaustiveCheck
    }
}
console.log(getArea2({ kind: 'square', size: 5 }))                      // 25
console.log(getArea2({ kind: 'rectangle', width: 5, height: 3 }))       // 15
console.log(getArea2({ kind: 'circle', radius: 5 }))                    // 78.53981633974483
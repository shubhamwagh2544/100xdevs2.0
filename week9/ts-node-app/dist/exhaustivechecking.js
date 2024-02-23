"use strict";
function getArea1(shape) {
    if (shape.kind === "square") {
        return shape.size * shape.size;
    }
    else if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }
    else {
        return Math.PI * shape.radius ** 2;
    }
}
console.log(getArea1({ kind: 'square', size: 5 }));
console.log(getArea1({ kind: 'rectangle', width: 5, height: 3 }));
console.log(getArea1({ kind: 'circle', radius: 5 }));
function getArea2(shape) {
    switch (shape.kind) {
        case "square":
            return shape.size * shape.size;
        case "rectangle":
            return shape.width * shape.height;
        case "circle":
            return Math.PI * shape.radius ** 2;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
console.log(getArea2({ kind: 'square', size: 5 }));
console.log(getArea2({ kind: 'rectangle', width: 5, height: 3 }));
console.log(getArea2({ kind: 'circle', radius: 5 }));

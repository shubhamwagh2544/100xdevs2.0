// 1. equality narrowing
// typeof is a type guard
function getId(id: number | string | null) {
    if (id) {
        if (typeof id === 'number') {
            return id + 1
        }
        else if (typeof id === 'string') {
            return id.toLowerCase()
        }
    }
    else {
        return 'id is null'
    }
}
console.log(getId(1))               // 2
console.log(getId('Hello'))         // hello
console.log(getId(null))            // id is null


function checkString(strs: string | string[] | null) {
    if (typeof strs === 'string') {
        return strs.toUpperCase()
    }
    else if (strs instanceof Array) {
        return strs.map(str => str.toUpperCase())
    }
    else {
        return 'strs is null'
    }
}
checkString('Hello')                 // HELLO
checkString(['Hello', 'World'])      // [ 'HELLO', 'WORLD' ]
checkString(null)                    // strs is null


let arrs: [] = []
console.log(typeof arrs)             // object
console.log(arrs instanceof Array)   // true
console.log(arrs.length)             // 0


interface Obj {
    name: string
    id: number
}
let obj: Obj = {
    name: 'John',
    id: 1
}
interface Obj {
    [key: string]: any
}
for (let key in obj) {
    console.log(obj[key])
}
console.log(typeof obj)                 // object
console.log(obj instanceof Object)      // true


// 2. in operator
// in operator is a type guard
interface USER {
    name: string
    id: number
}
interface ADMIN {
    name: string
    id: number
    isAdmin: boolean
}
function printAll(user: USER | ADMIN) {
    if ('isAdmin' in user) {
        // user is ADMIN
    }
    else {
        // user is USER
    }
}


// 3. instanceof operator
// instanceof operator is a type guard
function checkDate(date: Date | string) {
    if (date instanceof Date) {
        return date.toDateString()
    }
    else {
        return new Date(date).toDateString()
    }
}


// 4. custom/user-defined type guard
interface Car {
    brand: string
    speed: number
}
interface Bike {
    brand: string
    speed: number
}
function isCar(vehicle: Car | Bike): vehicle is Car {
    return (vehicle as Car).speed !== undefined
}
function getSpeed(vehicle: Car | Bike) {
    if (isCar(vehicle)) {
        return 'Car'
    }
    else {
        return 'Bike'
    }
}
console.log(
    getSpeed({ brand: 'BMW', speed: 200 })    // Car
)
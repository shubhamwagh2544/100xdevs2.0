// function that needs to return the first element of an array. Array can be of type either string or integer.

// issue 1
type Input = string | number
function firstElm(arr: Input[]): Input {
    //console.log(arr[0].toUpperCase())   // method do not exist on type number
    return arr[0]
}

console.log(firstElm(['hi', 'helloe']))
console.log(firstElm([1, 2, 3, 4, 5]))


// issue 2
function firstEl(arr: string[] | number[]): string | number {
    return arr[0]
}

//console.log(firstEl(['hi', 1, 2, 3]))     // either string[] or number[] array


// issue 3
function firstElmn(arr: (string | number)[]): string | number {
    //console.log(arr[0].toFixed(2))        // method do not exist on type string
    return arr[0]
}

console.log(firstElmn(['hi', 'helloe']))
console.log(firstElmn([1.11111, 2.2222]))


// generics
function generics<T>(args: T): T {
    return args
}

console.log(generics<string>('hi'))
console.log(generics<number>(25))

//solution
function firstElement<T>(arr: T[]): T {
    return arr[0]
}

let firstelement = firstElement<string>(['shubham', 'helo'])
console.log(firstelement.toUpperCase())

let firstnumber = firstElement<number>([1.111111, 2.22222])
console.log(firstnumber.toFixed(2))
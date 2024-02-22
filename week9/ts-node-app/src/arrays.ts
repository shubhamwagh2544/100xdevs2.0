// function takes array as input and returns max number
function maxNumber(arr: number[]): number {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(maxNumber([1, 4, 2, 5, 3]))


// function returns array of strings
function ok(): string[] {
    return ['hello', 'world']
}


// map on array
const arr = [1, 2, 3, 4, 5]
const newarr = arr.map((item: number, index: number): number => {
    return item + 2
})
newarr.forEach((item: number) => console.log(item))


// arrays
const numberArr: number[] = [1, 2, 3, 4, 5]
const stringArr: string[] = ['hello', 'world']

const mixedArr: (number | string)[] = [1, 'hello', 2, 'world']

const twoDArray: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]

const threeDArray: number[][][] = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
]

// arrays with type alias
type Userrrr = {
    readonly name: string,
    age: number,
    email?: string
}
const users: Userrrr[] = [
    {
        name: 'shubham',
        age: 25,
        email: 'test@gmail.com'
    },
    {
        name: 'wagh',
        age: 25
    },
    {
        name: 'shubham wagh',
        age: 25
    }
]

// arrays with interface
interface Usser {
    readonly name: string,
    age: number,
    email?: string
}
const userss: Usser[] = [
    {
        name: 'shubham',
        age: 25,
        email: 'test2@gmail.com'
    },
    {
        name: 'wagh',
        age: 25
    },
    {
        name: 'shubham wagh',
        age: 25
    }
]
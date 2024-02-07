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
// why tuples ? => when we want to store a fixed number of elements with different types [order matters + fixed length]
let array: [number, string, boolean] = [1, 'shubham', true]

// use case
const rgb: [number, number, number] = [255, 0, 0]

// can change
rgb[0] = 111
console.log(rgb) // [111, 0, 0]

// can't add
//rgb[3] = 0 // error: Tuple type '[number, number, number]' of length '3' has no element at index '3'.


// if you dont want to change values
const rgb2: readonly [number, number, number] = [255, 0, 0]
//rgb2[0] = 111 // error: Cannot assign to '0' because it is a read-only property.
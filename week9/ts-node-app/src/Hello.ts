let greetings: string = "Hello, Shubham"
greetings = greetings.toLowerCase()
console.log(greetings)


let userId = 2332.3
console.log(userId.toFixed(2))

let isLoggedIn: boolean = false
console.log(isLoggedIn)


// any: bad practise (any is used to avoid type-checking errors on particular value)
let hero                        // let hero: any
function getHero() {
    return "hero"
}
hero = getHero()


// instead add type beforehand
let hero2: string
function getHero2(): string {
    return "hero"
}
hero2 = getHero2()
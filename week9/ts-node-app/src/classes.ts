// 1
class Personn {
    readonly name: string           // readonly + public by default
    age: number                     // public by default
    address?: string                // optional + public by default
    defaultValue: string = 'default value'  // default value + public by default

    private userId: number          // private = only accessible within the class
    public userName: string         // public = accessible from outside the class 

    constructor(name: string, age: number, address: string, userId: number, userName: string) {
        this.name = name
        this.age = age
        this.address = address
        this.userId = userId
        this.userName = userName
    }
}

const person = new Personn('shubham wagh', 25, 'pune mh', 1, 'shubhamwagh')
console.log(person.defaultValue)


// 2
class Personn2 {
    constructor(
        private userId: number,
        readonly name: string,
        public age: number,
        public userName: string,    // required parameters should come first and then optional parameters
        public address?: string,
        // why => when you call this function and only pass one argument, TypeScript wouldn't know whether you're passing a value for optionalParam or requiredParam)
    ) {

    }
}

const person2 = new Personn2(
    1,
    'shubham wagh',
    25,
    'shubhamwagh',
    //'pune mh',
)
console.log(person2)


// the Personn2 object can be indexed by a string, and the value at that index can be any type.
interface Personn2 {
    [key: string]: any              // index signature => any type can be assigned to key: string
}

for (const key in person2) {
    console.log(key, person2[key])
}


// getter and setter
class Personn3 {
    private _name: string = 'shubham'

    static classname: string = 'Personn3'

    protected protectedProperty: string = 'protected property'

    public publicProperty: string = 'public property'

    // getter
    get name(): string {            // getter cannot have parameters and must have return type
        return this._name
    }

    // setter
    set name(value: string) {       // setter cannot have return type and must have exactly one parameter
        this._name = value
    }

    // private method
    private deleteToken() {
        console.log('token deleted!')
    }

    // constructor
    constructor() {
        this.deleteToken()
    }

    // public method
    callMePublic() {
        this._name                  // can access private property
        this.deleteToken()
        console.log('I am public and can be called from outside the class')
    }

    // static method
    static callMeStatic() {
        Personn3.classname          // can access static property via class name
        //this._name                // error: cannot access _name from static method
        console.log('I am static and can be called without creating an object of the class')
    }
}

const person3 = new Personn3()
// getter
console.log(person3.name)           // shubham
// setter
person3.name = 'shubham wagh'
console.log(person3.name)           // shubham wagh

// person3.deleteToken()            // error: Property 'deleteToken' is private and only accessible within class 'Personn3'

person3.callMePublic()              // I am public and can be called from outside the class

Personn3.callMeStatic()             // I am static and can be called without creating an object of the class


// inheritance
class Personn4 extends Personn3 {
    constructor() {
        super()                     // must call super() in derived class constructor
    }
    call() {
        this.callMePublic()         // can access public method of parent class
        Personn3.callMeStatic()     // can access static method of parent class
        this.protectedProperty = 'new protected property'  // can access protected property of parent class
        this.publicProperty = 'new public property'        // can access public property of parent class
    }
}

const person4 = new Personn4()
person4.call()
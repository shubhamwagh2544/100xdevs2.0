// what if we have to find out time for each method run
// decorators: add functionality to method, class or property

import { measure, once } from "helpful-decorators";

class Decorators {

    @once                   // call method only once
    method1() {
        console.log('hello from method-1')
    }

    @measure                // measures how much time method took to run
    method2() {
        for (let i = 0; i < 10000000000; i++) {
            // do nothing
        }
        console.log('hello from method-2')
    }
}

const decorator = new Decorators()
decorator.method1();
decorator.method1();
decorator.method1();
decorator.method1();
decorator.method1();

decorator.method2()

// how to compile decorator files
// tsc --experimentalDecorators
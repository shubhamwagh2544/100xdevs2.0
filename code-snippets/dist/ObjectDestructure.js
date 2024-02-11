"use strict";
function can() {
    let obj = {
        id: 1,
        name: 'shubam'
    };
    let newObj = Object.assign(Object.assign({}, obj), { ['id']: 3, ['name']: 'ramesh', ['newProp']: {
            ['prop1']: 1,
            ['prop2']: 'literal',
            ['prop3']: true,
            ['prop4']: [1, 2, 3, 4],
            ['prop5']: ['abc', 'def']
        } });
    return newObj;
}
console.log(can());

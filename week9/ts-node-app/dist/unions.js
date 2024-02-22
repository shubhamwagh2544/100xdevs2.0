"use strict";
let userrr = {
    name: 'shubham',
    id: '1'
};
userrr = Object.assign(Object.assign({}, userrr), { isAdmin: true });
function getDatabaseId(id) {
    if (typeof id === 'string') {
        return id.concat('0000');
    }
    else {
        return id = id + 2;
    }
}
console.log(getDatabaseId(1));
console.log(getDatabaseId('1'));

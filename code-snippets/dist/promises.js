"use strict";
function call() {
    //return Promise.reject()
    return Promise.resolve();
}
call()
    .then(() => console.log('resolved'))
    .catch(() => console.log('rejected'));

// 1
type Usserr = {
    name: string,
    id: string
}

type Admin = {
    name: string,
    isAdmin: boolean,
    id: string
}

let userrr: Usserr | Admin = {
    name: 'shubham',
    id: '1'
}

userrr = { ...userrr, isAdmin: true }


// 2
function getDatabaseId(id: (number | string)) {
    if (typeof id === 'string') {
        return id.concat('0000')
    }
    else {
        return id = id + 2
    }
}

console.log(getDatabaseId('1')) // 10000
console.log(getDatabaseId(1))   // 3
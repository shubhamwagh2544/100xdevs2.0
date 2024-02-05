import { atomFamily, selectorFamily } from 'recoil'
import { TODOS } from '../../todos'
import axios from 'axios'

// atomFamily returns a function that returns a writeable RecoilState atom
/*
const todosAtomFamily = function() {
    return atom((id))
}
*/

// atomFamily => suppose state is composed of multiple elememts and each element has separate state then its better to use atomFamily({})

// export const todosAtomFamily = atomFamily({
//     key: 'todosAtomFamily',
//     default: (id) => {
//         return TODOS.find((x) => x.id === id)   // hardcoded values
//     }
// })

// selectorFamily : ƒor async backend data calls [async data queries]
// selectorFamily returns a function that can be called with user-defined parameters and returns a selector

export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily',
    default: selectorFamily({
        key: 'todosSelectorFamily',
        get: function (id) {
            return async function ({ get }) {
                const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
                return res.data.todo
            }
        }
    })
})
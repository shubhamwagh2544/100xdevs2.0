import { atomFamily } from 'recoil'
import { TODOS } from '../../todos'

// atomFamily returns a function that returns a writeable RecoilState atom
/*
const todosAtomFamily = function() {
    return atom((id))
}
*/
export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily',
    default: (id) => {
        return TODOS.find((x) => x.id === id)
    }
})

// atomFamily => suppose state is composed of multiple elememts and each element has separate state then its better to use atomFamily({})
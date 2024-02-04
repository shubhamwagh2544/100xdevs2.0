import { selector } from "recoil";
import { counterAtom } from "../atoms/count";

export const evenSelector = selector({
    key: 'evenSelector',
    get: ({ get }) => {
        const count = get(counterAtom)
        return count % 2
    }
})

// selector lets you get derived state from existing state
// It allows us to expose new pieces of state based on the current state of atoms or other selectors.
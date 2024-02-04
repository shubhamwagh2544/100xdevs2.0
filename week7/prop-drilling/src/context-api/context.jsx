import { createContext } from "react";

export const CountContext = createContext({
    count: 0,
    setCount: function () {
        return this.count + 1
    }
})
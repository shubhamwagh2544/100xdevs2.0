import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { counterAtom } from "../store/atoms/count";


function CounterAppRecoil() {
    return (
        <div>
            <RecoilRoot>
                <Counter />
            </RecoilRoot>
        </div>
    )
}

function Counter() {
    return (
        <div>
            <CountRenderer />
            <Button />
        </div>
    )
}

function CountRenderer() {
    const count = useRecoilValue(counterAtom)
    return (
        <div>
            {count}
        </div>
    )
}

function Button() {
    const [count, setCount] = useRecoilState(counterAtom)

    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
            <button onClick={() => { setCount(count - 1) }}>Decrement</button>
        </div>
    )
}

export default CounterAppRecoil
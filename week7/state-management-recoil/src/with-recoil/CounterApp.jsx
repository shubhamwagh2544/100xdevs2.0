import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "../store/atoms/count";
import { evenSelector } from "../store/selectors/evenSelector";


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
    console.log('app rerendered')
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
            <EvenCountRenderer />
        </div>
    )
}

function EvenCountRenderer() {
    const count = useRecoilValue(counterAtom)
    return (
        <div>
            {(count % 2 == 0) ? "It is Even" : "It is Odd"}
        </div>
    )
}

function EvenCountRendererWithSelector() {
    const isEven = useRecoilValue(evenSelector)
    return (
        <div>
            {isEven ? "It is even" : "It is odd"}
        </div>
    )
}

function Button() {
    //const [count, setCount] = useRecoilState(counterAtom)
    const setCount = useSetRecoilState(counterAtom)
    console.log('buttons rerendered')

    return (
        <div>
            <button onClick={() => { setCount(count => count + 1) }}>Increment</button>
            <button onClick={() => { setCount(count => count - 1) }}>Decrement</button>
        </div>
    )
}

export default CounterAppRecoil
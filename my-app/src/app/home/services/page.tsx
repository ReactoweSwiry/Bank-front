'use client'
import { increment, decrement } from '../../../lib/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '../../../lib/hooks'

export default function Home() {
    const dispatch = useAppDispatch()

    const count = useAppSelector((state) => state.counterReducer.value);

    return (
        <header>
            <h1 className="text-4xl font-bold">Bank App {count}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5 my-2" onClick={() => dispatch(increment())}>Increment</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(decrement())}>Decrement</button>
        </header>
    );
};


"use client";

import { useState } from "react"
import { type CounterStore, createCounterStore } from "@/store/counterStore";
import { useCounterStore } from "@/app/providers/counter-store-provider";

interface Props {
    value?: number
}

export const CartCounter = ({value=0}: Props) => {
    //const [count, setCount] = useState(value); 
    //const {counter,} = createCounterStore({counter: 0});
    const {counter, decrement,increment} = useCounterStore((state:CounterStore)=> state);

    return (
        <div className="flex items-center justify-center w-10 h-10">
            <span className="text-9xl">{counter}</span>
            <button className="flex items-center  justify-center p-2 rounded-xl bg-gray-900 text-white  hover:bg-gray-600 transition-all mr-2" onClick={increment}>
                +1
            </button>
            <button className="flex items-center  justify-center p-2 rounded-xl bg-gray-900 text-white  hover:bg-gray-600 transition-all mr-2" onClick={decrement}>
                -1
            </button>            
        </div>
    )
}
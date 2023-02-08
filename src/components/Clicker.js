import {useEffect, useState} from "react";

const Clicker = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };
    useEffect(() => {
        console.log('Hello from clicker!')
    },[]);

    return (
        <div className="Clicker">
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Clicker;
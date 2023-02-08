import {useState} from "react";

const AppFunctional = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="AppFunctional">
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default AppFunctional;
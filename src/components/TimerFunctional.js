import React, {useEffect, useRef, useState} from "react";

function f() {
    let userCount = Number(localStorage.getItem('count'));
    if (userCount){
        return userCount ? +userCount : 0;
    }
}
const TimerFunctional = () => {
    const [count,setCount] = useState(f());
    const [isCounting,setCounting] = useState(false);
    let timerIdRef = useRef(null);
    const handleStart = () => {
        setCounting(true);

    }
    const handleStop = () => {
        clearInterval(timerIdRef.current);
        setCounting(false);
    }
    const handleReset = () => {
        setCount(0);
        setCounting(false);
    }
    useEffect(() => {
        localStorage.setItem('count', String(count));
    }, [count]);
    useEffect(() => {
        if(isCounting){
            timerIdRef.current = setInterval(()=>{
                setCount((prevState) => prevState + 1);
            }, 1000);
        }
        return () => {
            timerIdRef.current && clearInterval(timerIdRef.current);
            timerIdRef.current = null;
        }
    }, [isCounting]);
    return (
        <div className="timer">
            <h1>React Timer</h1>
            <h3>{count}</h3>
            {!isCounting ? (
                <button onClick={handleStart}>Start</button>
            ) : (
                <button onClick={handleStop}>Stop</button>
            )}
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default TimerFunctional;

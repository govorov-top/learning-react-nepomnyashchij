import React, {useEffect, useReducer} from "react";

function countReducer(state, {type}) {
    switch (type) {
        case 'START': return {...state, isCounting: true};
        case 'STOP': return {...state, isCounting: false};
        case 'RESET': return {...state, count: 0,isCounting: false};
        case 'PROCESS': return {...state, count: state.count + 1};
        default: throw new Error();
    }
}
function setDefaultValue() {
    let userCount = localStorage.getItem('count');
    return userCount ? +userCount : 0;
}
const TimerFunctional = () => {
    const [{count,isCounting}, dispatch] = useReducer(countReducer, {count: setDefaultValue(), isCounting: false}, );

    useEffect(() => {
        localStorage.setItem('count', String(count));
    }, [count]);

    useEffect(() => {
        let timerId = null;
        if(isCounting){
            timerId = setInterval(()=>{
                dispatch({type: 'PROCESS'});
            }, 1000);
        }
        return () => {
            timerId && clearInterval(timerId);
            timerId = null;
        }
    }, [isCounting]);
    return (
        <div className="timer">
            <h1>React Timer</h1>
            <h3>{count ?? 0}</h3>
            {!isCounting ? (
                <button onClick={()=>{dispatch({type: 'START'})}}>Start</button>
            ) : (
                <button onClick={()=>{dispatch({type: 'STOP'})}}>Stop</button>
            )}
            <button onClick={    ()=>{dispatch({type: 'RESET'})}}>Reset</button>
        </div>
    );
}

export default TimerFunctional;

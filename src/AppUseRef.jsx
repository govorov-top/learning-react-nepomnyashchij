import {useEffect, useRef, useState} from "react";

const AppUseRef = () => {
    const [count, setCount] = useState(0);
    const inputEl = useRef(null);
    console.log(inputEl);

    const numRef = useRef(0);
    console.log(numRef.current);

    const clickHandler = () => {
        numRef.current = numRef.current++;
        setCount(prevCount => prevCount + 1)
    }

    useEffect(()=>{
        // Node
        console.log(inputEl);
        console.log(numRef.current);
    },[]);

    return (
        <div className="AppUseRef">
            <input type="text" placeholder="Name" ref={inputEl}/>
            <button onClick={clickHandler}>{count} _ {numRef.current}</button>
        </div>
    );
}

export default AppUseRef;
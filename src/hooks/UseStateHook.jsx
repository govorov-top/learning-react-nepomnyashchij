import {useEffect, useState} from "react";

const UseStateHook = () => {

    const [state, setState] = useState({
        count: 0,
        isCounting: false
    });
    /*

        const [value, setValue] = useState(() => {
            const userCount = localStorage.getItem('count');
            return +userCount || 0;
        });

        setValue(prevState => prevState + 1);
    */
    const countHandler = () => {
        setState({...state,count: state.count + 1})
    }
    const statusHandler = () => {
        setState({...state,isCounting: !state.isCounting})
    }

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <>
            <button onClick={countHandler}>Click</button>
            <button onClick={statusHandler}>Click</button>
        </>
    );
}
export default UseStateHook;
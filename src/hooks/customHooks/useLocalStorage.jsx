import {useEffect, useState} from "react";

function useLocalStorage (initialState, key, type = 'string'){
    const get = () => {
        const storage = localStorage.getItem(key);
        return storage? type === 'string' ? storage : + storage : initialState;
    }
    const [value, setValue] = useState(get);

    useEffect(()=>{
        localStorage.setItem(key, value);
    }, [key, value])

    return [value, setValue];
}
export { useLocalStorage };
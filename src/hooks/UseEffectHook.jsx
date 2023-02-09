import {useEffect} from "react";

const UseEffectHook = () => {

    useEffect(() => {
        const handler = () => {
            console.log('handler')
        }
        document.addEventListener('click', handler);
        return () => {
            document.removeEventListener('click', handler);
        }
    }, []);

    return (
        <>
            <button>Click</button>
            <button>Click</button>
        </>
    );
}
export default UseEffectHook;
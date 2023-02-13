import {usePrevious} from "./hooks/customHooks/usePrevious";
import {useLocalStorage} from "./hooks/customHooks/useLocalStorage";

function AppUseCustomHooks () {
    const [count, setCount] = useLocalStorage(0, 'count', 'number');
    const prevCount = usePrevious(count);
    return (
        <div className="App">
            <button onClick={() => setCount(count + 1)}>+</button>

            <h2>Current: {count}</h2>
            <h2>Previous: {prevCount ?? 0}</h2>
        </div>
    ) ;
}

export default AppUseCustomHooks;
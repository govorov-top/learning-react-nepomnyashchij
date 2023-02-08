import Clicker from "./components/Clicker";
import {useState} from "react";

const AppUseEffect = () => {
    const [isClicker, setClicker] = useState(false);

    return (
        <div className="AppUseEffect">
            <button onClick={() => setClicker(!isClicker)}>Toggle clicker</button>
            {isClicker && <Clicker/>}
        </div>
    );
}

export default AppUseEffect;
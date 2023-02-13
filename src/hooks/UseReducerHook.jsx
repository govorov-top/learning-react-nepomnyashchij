import {useReducer} from "react";

const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
const step = 50;

const reducer = (state, { type, payload = step }) => {
    switch (type) {
        case "INCREMENT_R":
            return {
                ...state,
                r: limitRGB(state.r + payload)
            };
        case "DECREMENT_R":
            return {
                ...state,
                r: limitRGB(state.r - payload)
            };
        case "INCREMENT_G":
            return {
                ...state,
                g: limitRGB(state.g + payload)
            };
        case "DECREMENT_G":
            return {
                ...state,
                g: limitRGB(state.g - payload)
            };
        case "INCREMENT_B":
            return {
                ...state,
                b: limitRGB(state.b + payload)
            };
        case "DECREMENT_B":
            return {
                ...state,
                b: limitRGB(state.b - payload)
            };
        default:
            return state;
    }
};

const UseReducerHook = () => {
    const initializerArg = { r: 0, g: 150, b: 200 };
    const [state, dispatch] = useReducer(reducer, initializerArg);
    const { r, g, b } = state;
    const body = document.getElementsByTagName('body')[0];
    body.style.background = `rgb(${r}, ${g}, ${b})`;

    return (
        <div className="App">
            <div>
                <span style={{color: 'black'}}>r </span>
                <button onClick={() => dispatch({ type: "INCREMENT_R", payload: 100 })}>
                    +
                </button>
                <button onClick={() => dispatch({ type: "DECREMENT_R" })}>-</button>
            </div>
            <div>
                <span style={{color: 'black'}}>g </span>
                <button onClick={() => dispatch({ type: "INCREMENT_G" })}>+</button>
                <button onClick={() => dispatch({ type: "DECREMENT_G" })}>-</button>
            </div>
            <div>
                <span style={{color: 'black'}}>b </span>
                <button onClick={() => dispatch({ type: "INCREMENT_B" })}>+</button>
                <button onClick={() => dispatch({ type: "DECREMENT_B" })}>-</button>
            </div>
        </div>
    );

}
export default UseReducerHook;
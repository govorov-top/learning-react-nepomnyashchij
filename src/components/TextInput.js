import React, {useImperativeHandle, useRef} from "react";

const TextInput = React.forwardRef((props, ref) => {
    const { hasError, placeholder, value, update } = props;
    console.log(update);
    const inputRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            focus() {
                inputRef.current.focus();
            }
        };
    });

    return (
        <input
            ref={inputRef}
            value={value}
            onChange={(e) => update(e.target.value)}
            placeholder={placeholder}
            style={{
                borderColor: hasError ? "red" : "black"
            }}
        />
    );
});
export default TextInput;
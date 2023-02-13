import React, {useState, useRef} from "react";
import TextInput from "../components/TextInput";

export const UseImperativeHandleHook = (props) => {
    const [card, setCard] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const cardEl = useRef(); // current = {focus() {}}
    const phoneEl = useRef();

    const validate = () => {
        if (card.length < 16) {
            setError("card");
            cardEl.current.focus(); // метод пришел снизу
            return;
        }

        if (phone.length < 11) {
            setError("phone");
            phoneEl.current.focus();
            return;
        }
        setError("");
    };

    return (
        <div>
            <h2>useImperativeHandle hook</h2>
            <TextInput
                hasError={error === "card"}
                placeholder={"Card"}
                ref={cardEl}
                value={card}
                update={setCard}
            />
            <TextInput
                hasError={error === "phone"}
                placeholder={"Phone"}
                value={phone}
                update={setPhone}
                ref={phoneEl}
            />
            <button onClick={validate}>Validate</button>
        </div>
    );
}
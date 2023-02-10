import {useContext} from "react";
import {CustomContext} from "../hooks/UseContextHook";

export default function Book (props){
    const {removeBook} = useContext(CustomContext);
    return (
        <div className="book" onClick={() => removeBook(props.id)}>
            {props.title}
        </div>
    ) ;
}
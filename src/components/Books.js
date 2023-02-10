import {useContext} from "react";
import {CustomContext} from "../hooks/UseContextHook";
import Book from "./Book";

export default function Books (){
    const {books = []} = useContext(CustomContext);
    return (
        <div className="books">
            {
                books.map(book => <Book key={book.id} id={book.id} title={book.title}/>)
            }
        </div>
    ) ;
}
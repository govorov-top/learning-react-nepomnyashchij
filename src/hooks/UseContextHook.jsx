import {createContext, useState} from "react";

export const CustomContext = createContext(undefined);
export const Context = (props) => {
    const [books, setBooks] = useState([
        {id:1,title:'b1'},
        {id:2,title:'b2'},
        {id:3,title:'b3'},
        {id:4,title:'b4'}
    ]);
    const addBook = (book) => {
        setBooks([book, ...books]);
    }
    const removeBook = (id) => {
        setBooks(books.filter( book => book.id !== id));
    }

    const value = {
        books,
        addBook,
        removeBook
    }

    return <CustomContext.Provider value={value}>{props.children}</CustomContext.Provider>
}
import CardList from "../components/CardList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import {useEffect, useState} from "react";

const API_OMDB_KEY = process.env.REACT_APP_API_OMDB_KEY;

function Main () {
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(true);

    const searchMoviesHandler = (str, type = 'all') => {
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=${API_OMDB_KEY}&s=${str}&t=${type !== 'all' ? `&type=${type}` : ''}&plot=full`)
            .then(resp => resp.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err)=>{
                console.error(err);
                setLoading(false);
            });
    }

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_OMDB_KEY}&s=marvel&plot=full`)
            .then(resp => resp.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err)=>{
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <main className="container content">
            <h1>Hi from Movies!</h1>
            <Search searchMovies={searchMoviesHandler}/>
            {
                loading
                    ? <Preloader/>
                    : <CardList movies={movies}/>
            }
        </main>
    ) ;
}

export default Main;
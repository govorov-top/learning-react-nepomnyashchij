import React from "react";
import {API_OMDB} from "../config/API";
import CardList from "../components/CardList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

class Main extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_OMDB}&s=iron`)
            .then(resp => resp.json())
            .then(data => this.setState({movies: data.Search}));
    }

    searchMoviesHandler = (str) => {
        fetch(`https://www.omdbapi.com/?apikey=${API_OMDB}&s=${str}`)
            .then(resp => resp.json())
            .then(data => this.setState({movies: data.Search}));
    }

    render() {
        const {movies} = this.state;
        return (
            <main className="container content">
                <h1>Hi from Movies!</h1>
                <Search searchMovies={this.searchMoviesHandler}/>
                {
                    movies.length > 0 ? <CardList movies={movies}/> : <Preloader/>
                }
            </main>
        ) ;
    }
}

export default Main;
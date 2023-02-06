import React from "react";
import CardList from "../components/CardList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_OMDB_KEY = process.env.REACT_APP_API_OMDB_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }
    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_OMDB_KEY}&s=marvel&plot=full`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                this.setState({movies: data.Search, loading: false})
            })
            .catch((err)=>{
                console.error(err);
                this.setState({...this, loading: false})
            });
    }

    searchMoviesHandler = (str, type = 'all') => {
        this.setState({...this, loading: true});
        fetch(`https://www.omdbapi.com/?apikey=${API_OMDB_KEY}&s=${str}&t=${type !== 'all' ? `&type=${type}` : ''}&plot=full`)
            .then(resp => resp.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch((err)=>{
                console.error(err);
                this.setState({...this, loading: false})
            });
    }

    render() {
        const {movies, loading} = this.state;
        return (
            <main className="container content">
                <h1>Hi from Movies!</h1>
                <Search searchMovies={this.searchMoviesHandler}/>
                {
                    loading
                        ? <Preloader/>
                        : <CardList movies={movies}/>
                }
            </main>
        ) ;
    }
}

export default Main;
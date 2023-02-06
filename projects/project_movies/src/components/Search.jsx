import React from "react";
import './Search.scss';
import Filter from "./Filter";

class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: 'marvel',
            type: 'all',
        }
    }

    keyHandler = (e) => {
        if (e.key === 'Enter'){
            e.preventDefault();
            this.props.searchMovies(this.state.search,this.state.type);
        }
    }

    filterMoviesHandler = (name) => {
        this.setState({
            ...this,
            type: name
        })
        this.props.searchMovies(this.state.search, name);
    }
    render() {
        const {search} = this.state;
        return (
            <>
                <div className="row">
                    <form className="col s12">
                        <div className="row valign-wrapper">
                            <div className="search-movies-input input-field col s6">
                                <i className="material-icons prefix"
                                   onClick={() => this.props.searchMovies(this.state.search,this.state.type)}
                                >search</i>
                                <input
                                    id="search_movies"
                                    type="search"
                                    className="validate"
                                    value={search}
                                    onChange={e => this.setState({search: e.target.value})}
                                    onKeyDown={this.keyHandler}
                                />
                                <label htmlFor="search_movies">Search movies</label>
                            </div>
                            <Filter filterMovies={this.filterMoviesHandler}/>
                        </div>
                    </form>
                </div>
            </>
        );
    }

}

export default Search;
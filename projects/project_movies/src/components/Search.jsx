import React from "react";
import styles from './Search.module.scss';

class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
    }

    keyHandler = (e) => {
        if (e.key === 'Enter'){
            e.preventDefault();
            this.props.searchMovies(this.state.search);
        }
    }

    render() {
        const {search} = this.state;
        return (
            <>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix"
                                onClick={() => this.props.searchMovies(this.state.search)}
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
                        </div>
                    </form>
                </div>
            </>
        );
    }

}

export default Search;
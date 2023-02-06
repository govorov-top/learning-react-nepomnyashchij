import Card from "./Card";
import styles from "./CardList.module.scss";
import React from "react";

function CardList({movies = []}) {
    return (
        <>
            <div className={styles.movies}>
                {
                    movies.length
                        ? movies.map(movie => <Card
                            key={movie.imdbID}
                            {...movie}
                        />)
                        : <h2>Not found...</h2>
                }
            </div>
        </>
    );
}

export default CardList;
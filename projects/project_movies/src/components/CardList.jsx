import Card from "./Card";
import styles from "./CardList.module.scss";

function CardList({movies}) {
  return (
      <>
          <div className={styles.movies}>

              {
                  movies.map(movie => <Card
                          key={movie.imdbID}
                          {...movie}
                      />
                  )
              }
          </div>
      </>
  );
}

export default CardList;

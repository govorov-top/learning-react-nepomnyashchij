import styles from './Card.module.scss';

function Card(props) {

    const {
        Title: title,
        Year: year,
        Plot: plot,
        Type: type,
        Poster: poster
    } = props;

    return (
        <div className={styles.card}>
            <div className="card-image">
                <img alt={title} src={poster !== 'N/A' ? poster : 'https://via.placeholder.com/237x352?text=Poster%20not%20found'}/>
                <span className={styles['card-title']}>{title}</span>
                <p>{year} <span className="right">{type}</span></p>
            </div>
            <div className="card-content">
                <p>{plot}</p>
            </div>
            <div className="card-action">
                <a href="/">This is a link</a>
            </div>
        </div>
    );

}

export default Card;
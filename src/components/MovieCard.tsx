import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

interface MovieCardProps {
    id: number;
    title: String;
    poster_path: String | null;
}

const MovieCard = ( { id, title, poster_path}: MovieCardProps ) => {
    const poster = poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : 'https://via.placeholder.com/300x450?text=No+Image';

    return (
        <Link to={`/movie/${id}`} className={styles.card}>
           <img src={poster} alt='${title}'/>
           <h3>{title}</h3>
        </Link>
    )
}

export default MovieCard;
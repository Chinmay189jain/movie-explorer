import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../store/favoritesSlice';
import { RootState } from '../store/store';

interface MovieCardProps {
    id: number;
    title: string;
    poster_path: string | null;
}

const MovieCard = ( { id, title, poster_path}: MovieCardProps ) => {

    const dispatch = useDispatch();

    // Get list of favorite movies from Redux store
    const favorites = useSelector((state: RootState) => state.favorites);

    // Check if this movie is already in favorites
    const isFavorite = favorites.some((movie) => movie.id === id);

    const handleFavoriteClick = () => {
        if(isFavorite){
            dispatch(removeFromFavorites(id));
        } else{
            dispatch(addToFavorites({ id, title, poster_path }))
        }
    }

    const poster = poster_path ? 
    `https://image.tmdb.org/t/p/w300${poster_path}` : 
    'https://via.placeholder.com/300x450?text=No+Image';

    return (
        <div className={styles.card}>
            <Link to={`/movie/${id}`}>
                <img src={poster} alt='${title}'/>
                <h3>{title}</h3>
            </Link>
            <button onClick={handleFavoriteClick} className={styles.favoriteButton}>
                {isFavorite ? '★ Remove Favorite' : '☆ Add Favorite'}
            </button>
        </div>
    )
}

export default MovieCard;
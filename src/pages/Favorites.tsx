import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import MovieCard from '../components/MovieCard';
import styles from './Favorites.module.css';
import { useMemo } from 'react';

const Favorites = () => {

    // Get list of favorite movies from Redux store
    const favorites = useSelector((state: RootState) => state.favorites);

    // Memoize the rendered movie list
    const movieList = useMemo(() => {
        return favorites.map((movie) => (
            <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                isFavorite={true}
            />
        ));
    }, [favorites]);

    return (
        <div className={styles.container}>
            <h2>⭐ Your Favorite Movies</h2>
            {favorites.length === 0 ? (
                <p>No favorites added yet.</p>
            ) : (
                    <div className={styles.movieList}>{movieList}</div>
                )
            }    
        </div>
    );
};

export default Favorites;
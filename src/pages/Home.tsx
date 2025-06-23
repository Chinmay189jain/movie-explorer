import { useEffect, useState } from 'react';
import { searchMovies } from '../api/tmdb';
import MovieCard from '../components/MovieCard';
import styles from './Home.module.css';
import useDebounce from '../hooks/useDebounce';
interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
}

const Home = () => {

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState<Movie[]>([]);

    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        const fetch = async () => {
            if (!debouncedQuery.trim()) {
                setMovies([]);
                return;
            }

            const results = await searchMovies(debouncedQuery);
            setMovies(results);
        };

        fetch();
    }, [debouncedQuery]);

    return (
        <div className={styles.container}>
            <h2>Movie Explorer 🎬</h2>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Search for movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div className={styles.movieList}>
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        poster_path={movie.poster_path}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home;
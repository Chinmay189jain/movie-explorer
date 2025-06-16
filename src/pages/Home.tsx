import { useState } from 'react';
import { searchMovies } from '../api/tmdb';
import MovieCard from '../components/MovieCard';
import styles from './Home.module.css';

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
}

const Home = () => {

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState<Movie[]>([]);

    const handleSearch = async () => {
        if(!query.trim()) return;
        const data = await searchMovies(query);
        setMovies(data);
    }

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
                <button onClick={handleSearch}>Search</button>
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
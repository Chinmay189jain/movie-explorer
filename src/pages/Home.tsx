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
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        //Whenever debouncedQuery changes, reset the page to 1
        setCurrentPage(1);
    }, [debouncedQuery]);

    useEffect(() => {
        const fetch = async () => {
            if (!debouncedQuery.trim()) {
                setMovies([]);
                return;
            }

            const data = await searchMovies(debouncedQuery, currentPage);
            setMovies(data.results);
            setTotalPages(data.total_pages)
        };

        fetch();
    }, [debouncedQuery, currentPage]);

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
                {movies.length > 0 && (
                    <div className={styles.pagination}>
                        <button onClick={() => setCurrentPage((p) => Math.max(p-1, 1))} disabled={currentPage===1}>
                            ◀ Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={() => setCurrentPage((p) => Math.min(p+1, totalPages))} disabled={currentPage===totalPages}>
                            Next ▶
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;
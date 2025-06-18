import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../api/tmdb";
import styles  from './MovieDetail.module.css'

interface MovieDetail {
    title: string;
    overview: string;
    poster_path: string | null;
    release_date: string;
    vote_average: number;
}

const MovieDetail = () => {

    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<MovieDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        
        const fetchMovie = async () => {
            try {
                const data = await getMovieDetails(id!);
                setMovie(data);
            } catch(err){
                setError('Failed to load movie details.');
            } finally {
                setLoading(false);
            }
        }

        fetchMovie();

    }, [id])

    if(loading) return <p className={styles.center}>Loading...</p>
    if(error) return <p className={styles.center}>{ error }</p>
    if (!movie) return <p className={styles.center}>Movie not found.</p>;

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.backLink}>← Back to Home</Link>
            <div className={styles.card}>
                <img 
                    src={
                        movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'
                    }
                    alt={movie.title}
                />
                <div className={styles.info}>
                    <h2>{movie.title}</h2>
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Rating:</strong> {movie.vote_average}/10</p>
                    <p className={styles.overview}>{movie.overview}</p>
                </div>
            </div>  
        </div>
    )
}

export default MovieDetail;
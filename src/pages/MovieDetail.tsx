import { useParams } from "react-router-dom";

const MovieDetail = () => {

    const { id } = useParams();

    return (
        <div>
            <h2>Movie Detail Page</h2>
            <p>Movie ID: {id}</p>
        </div>
    )
}

export default MovieDetail;
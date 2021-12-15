
import { Movie } from '../../types/movie';

type Props = {
    movie: Movie;
}

const MovieList = ({ movie } : Props) => {

    return(
        <div className="movie-list">
            <p>Acessar /movies/{movie.id}</p>    
        </div>
    );
    }
    export default MovieList;
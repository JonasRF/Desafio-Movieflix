import { Movie } from '../../types/movie';

import './styles.css';

type Props = {
  movie: Movie;
};

const MovieList = ({ movie }: Props) => {
  return (
    
      <div className="movie-list">
        <div className="base-card card-movie-list">
          <img src={movie?.imgUrl} alt={movie?.title} />
          <div>
            <h4 className="card-movie-list-title">{movie?.title}</h4>
            <h4 className="card-movie-list-year">{movie?.year}</h4>
            <h4 className="card-movie-list-subtitle">{movie?.subTitle}</h4>
          </div>
        </div>
      </div>
  );
};
export default MovieList;

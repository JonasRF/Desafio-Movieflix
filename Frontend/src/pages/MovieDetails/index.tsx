import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieReviews from '../../components/MovieReviews';
import { Movie } from '../../types/movie';

import { requestBackend } from '../../util/requests';
import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <div className="movie-details-container" key={movie?.id}>
      <div className="base-card card-movie-details">
        <img src={movie?.imgUrl} alt={movie?.title} />
        <div className="card-movie-title-year-subtitle">
          <h4 className="card-movie-details-title">{movie?.title}</h4>
          <h4 className="card-movie-details-year">{movie?.year}</h4>
          <h4 className="card-movie-details-subtitle">{movie?.subTitle}</h4>
          <div className="card-movie-details-synopsis">{movie?.synopsis}</div>
        </div>
      </div>
      <MovieReviews />
    </div>
  );
};
export default MovieDetails;

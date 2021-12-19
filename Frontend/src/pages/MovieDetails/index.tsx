import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MovieReviews from '../../components/MovieReviews';
import { Movie } from '../../types/movie';
import { hasAnyRoles } from '../../util/auth';
import { requestBackend } from '../../util/requests';
import './styles.css';
import Form from '../../components/FormReviews';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
        method:'GET',
        url:`/movies/${movieId}`,
        withCredentials: true,
    };
    requestBackend(params).then(response => { 
      setMovie(response.data);
    });
  }, [movieId]);
  
  return (
    <div className="movie-details-container">
      <p>Tela detalhes do filme</p>
      <p>Id:{movie?.id}</p>
      {hasAnyRoles(['ROLE_MEMBER']) && (
      <p><Form /></p>
      )}
      <MovieReviews />
     </div>
  );
};
export default MovieDetails;

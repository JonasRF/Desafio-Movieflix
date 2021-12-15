
import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../../components/MovieList';
import { Movie } from '../../types/movie';
import { SpringPage } from '../../types/vendor/spring';
import { requestBackend } from '../../util/requests';
import './styles.css';

const Movies = () => {

const [ page, setPage ] = useState<SpringPage<Movie>>();

useEffect(() => {
  const params: AxiosRequestConfig = {
    method:"GET",
    url: "/movies",
    withCredentials: true,
    params: {
      page: 0,
      size: 2,
    },
  };
  requestBackend(params).then((response) => {
    setPage(response.data);

    console.log(response.data);
    
  });
}, []);

  return (
    <>
    <div className="container-movie">
      <h1>Tela listagem de filmes</h1>
      <div className="link-details-movie">
        {page?.content.map((movie) => (
          <div key={movie.id}>
        <Link to={{ pathname: `/movies/${movie.id}/` }}>
          <MovieList movie={movie} />
        </Link>
        </div>
        ))}
      </div>
    </div>
    </>
  );
};
export default Movies;

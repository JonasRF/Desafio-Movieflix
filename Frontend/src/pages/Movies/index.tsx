import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GenreFilter from '../../components/GenreFilter';
import MovieList from '../../components/MovieList';
import Pagination from '../../components/Pagination';
import { Movie } from '../../types/movie';
import { SpringPage } from '../../types/vendor/spring';
import { requestBackend } from '../../util/requests';
import './styles.css';

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const getMovies = (pageNamber: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: 'movies',
      withCredentials: true,
      params: {
        page: pageNamber,
        size: 4,
      },
    };
    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  };
  useEffect(() => {
    getMovies(0);
  }, []);

  return (
    <>
      <div className="container my-4 container-movie">
        <GenreFilter />
        <div className="row link-details-movie">
          {page?.content.map((movie) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={movie.id}>
              <Link to={{ pathname: `/movies/${movie.id}/` }}>
                <MovieList movie={movie} />
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
        <Pagination 
        pageCount={(page) ? page.totalPages : 0}
        range={(page) ? page.size : 0}
        onChange={getMovies}
        />
        </div>
      </div>
    </>
  );
};
export default Movies;

import { AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GenreFilter, { MovieFilterData } from '../../components/GenreFilter';
import MovieList from '../../components/MovieList';
import Pagination from '../../components/Pagination';
import { Movie } from '../../types/movie';
import { SpringPage } from '../../types/vendor/spring';
import { requestBackend } from '../../util/requests';
import './styles.css';

type ControlComponentData = {
  activepage: number;
  filterData: MovieFilterData;
}

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

 //Controle de componentes
  const [ controlComponentData, setcontrolComponentData ] = useState<ControlComponentData>(
    {
      activepage: 0,
      filterData: { genre: null }
    }
  );

  const handlePageChange = (pageNumber: number) => {
    setcontrolComponentData({ activepage: pageNumber, filterData: controlComponentData.filterData})
  }

  //Envento para filtrar lista de filmes paginada por genero
  const handleSelectFilter = (data: MovieFilterData) => {
    setcontrolComponentData({activepage: 0, filterData: data})
  }

  const getMovies = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: 'movies',
      withCredentials: true,
      params: {
        page: controlComponentData.activepage,
        size: 4,
        genreId: controlComponentData.filterData.genre?.id
      },
    };
    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  },[controlComponentData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <>
      <div className="container my-4 container-movie">
        <GenreFilter onSelectFilter={handleSelectFilter}/>
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
        onChange={handlePageChange}
        />
        </div>
      </div>
    </>
  );
};
export default Movies;

import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Genre } from '../../types/genre';
import { requestBackend } from '../../util/requests';
import './styles.css';

export type MovieFilterData = {
  genre: Genre | null;
};

type Props = {
  onSelectFilter : (data: MovieFilterData) => void;
}

const GenreFilter = ( { onSelectFilter } : Props) => {

  const [selectGenre, setSelectGenries] = useState<Genre[]>([]);

  const { setValue, getValues, control } = useForm<MovieFilterData>();

  const handleChangeGenre = (value: Genre) => {
    setValue('genre', value);

    const obj : MovieFilterData = {
      genre: getValues('genre')
    }

    onSelectFilter(obj);
    console.log(getValues('genre'))
  };

  useEffect(() => {
    requestBackend({method: 'GET', url: '/genres', withCredentials: true,
    }).then((response) => {
      setSelectGenries(response.data);
    });
  }, []);

  return (
    <div className="base-card base-card-movie-select-filter">
      <form>
        <div className="movie-filter-genre-container">
          <Controller
            name="genre"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={selectGenre}
                isClearable
                placeholder="Genrie"
                classNamePrefix="movie-filter-select"
                getOptionLabel={(genre: Genre) => genre.name}
                getOptionValue={(genre: Genre) => String(genre.id)}
                onChange={(value) => handleChangeGenre(value as Genre)}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
};
export default GenreFilter;

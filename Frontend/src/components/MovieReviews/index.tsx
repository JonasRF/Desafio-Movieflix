import { AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewUser } from '../../types/reviewUser';
import { hasAnyRoles } from '../../util/auth';
import { requestBackend } from '../../util/requests';
import CardReview from '../CardReview';
import FormReviews from '../FormReviews';
import MovieNoReview from '../MovieNoReview';

import './styles.css';

type UrlParams = {
  movieId: string;
};

type ControlComponentsData = {
  filterData: UrlParams;
}

const MovieReviews = () => {
  
  const { movieId } = useParams<UrlParams>();

   //Controle de componentes
  const [ controlComponentsData, setControlComponentsData ] = useState<ControlComponentsData>(
    {
     filterData: { movieId: ''}
    }
  );

  //Evento para realizar a atualização da lista
  const handleSubmitForm = (data: UrlParams) => {
    setControlComponentsData({ filterData: data})
  }

  const [review, setReview] = useState<ReviewUser[]>();

  const getReviews = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setReview(response.data);
      console.log('Array', response.data);
    });
   },[movieId]);

   useEffect(() => {
    getReviews();
  },[controlComponentsData, getReviews]);

  return (
    <>
    <div>
    {hasAnyRoles(['ROLE_MEMBER']) && (
      <FormReviews onSubmitForm={handleSubmitForm}/>
      )}
    </div>
    <div className="base-card base-card-movie-reviews" >
      { review && review.length > 0 ? (
        review.map((review) => (
          <div key={review.id}>
            <CardReview text={review.text} name={review.user.name} />
          </div>
        ))
      ) : (
        <div >
          <MovieNoReview text='Nenhum comentário aplicado!' />
        </div>
      )}
    </div>
    </>
  );
};
export default MovieReviews;

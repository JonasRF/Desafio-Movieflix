import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { ReviewUser } from '../../types/reviewUser';
import { requestBackend } from '../../util/requests';
import CardReview from '../CardReview';

import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieReviews = () => {
  const { movieId } = useParams<UrlParams>();

  const [review, setReview] = useState<ReviewUser[]>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setReview(response.data);
      console.log('Array', response.data);
    });
  }, [movieId]);

  return (
    <div className="base-card" >
      { review && review.length > 0 ? (
        review.map((review) => (
          <div key={review.id}>
            <CardReview text={review.text} name={review.user.name} />
          </div>
        ))
      ) : (
        <p>Usuário não realizou comentários do filme selecionado!</p>
      )}
    </div>
  );
};
export default MovieReviews;

import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Movie } from '../../types/movie';
import { Review } from '../../types/review';
import { requestBackend } from '../../util/requests';
import CardReview from '../CardReview';
import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieReviews = () => {
  const { movieId } = useParams<UrlParams>();

  const [review, setReview] = useState<Review[]>();

  const [movie] = useState<Movie>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setReview(response.data);
      console.log(response.data)
    });
  }, [movieId]);

  return (
    <div className="base-card">
      {review && review.length > 0 ? (
        review.map((review) => (
          <div  key={movie?.id}>
            <CardReview review={review} />
            </div>
        ))
      ) : (
        <p>Usuário não realizou comentários do filme selecionado!</p>
      )}
    </div>
  );
};
export default MovieReviews;

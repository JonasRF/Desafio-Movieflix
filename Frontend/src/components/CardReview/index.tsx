import { Movie } from '../../types/movie';
import { Review } from '../../types/review';
import { ReactComponent as ImageReviews } from '../../assets/images/estrela.svg';

import './styles.css'; 

type Props = {
  review: Review;
  movie?: Movie;
};

const CardReview = ({ review, movie }: Props) => {
  return (
    <div className="base-card-font">
      <div className="base-image-name"><ImageReviews /></div>
        <h5>{review.user.name}</h5>
        

      <div className="base-card-container" key={movie?.id}>
        <p>{review.text}</p>
      </div>
    </div>
  );
};
export default CardReview;

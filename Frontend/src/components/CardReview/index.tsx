import { ReactComponent as ImageReviews } from '../../assets/images/estrela.svg';

import './styles.css'; 

type Props = {
  text: string;
  name: string;
};

const CardReview = ({ name, text }: Props) => {
  return (
    <div className="base-card-font">
      <div className="base-image-name" ><ImageReviews /></div>
        <h5>{name}</h5>
      <div className="base-card-container">
        <p>{text}</p>
      </div>
    </div>
  );
};
export default CardReview;

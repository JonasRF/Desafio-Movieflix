import './styles.css';

type Props = {
    text: string;
}

const MovieNoReview = ( { text } : Props) => {
    return(
        <div className="card-noReview">
            <p>{text}</p>
        </div>
    );
}
export default MovieNoReview;
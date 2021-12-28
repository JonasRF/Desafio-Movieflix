
import './styles.css';

type Props = {
    text: string;
}

const ButtonIcon = ( { text } : Props) => {
    return(
            <div>
                <button className="btn btn-button-card">
                    <h4>{text}</h4>
                </button>
            </div>
    );
}
export default ButtonIcon;
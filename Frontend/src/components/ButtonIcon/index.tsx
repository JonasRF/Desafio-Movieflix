
import './styles.css';

type Props = {
    text: string;
}

const ButtonIcon = ( { text } : Props) => {
    return(
            <div className="button-card">
                <button className="btn">
                    <h4>{text}</h4>
                </button>
            </div>
    );
}
export default ButtonIcon;
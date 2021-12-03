
import ButtonIcon from '../../../components/ButtonIcon';
import Navbar from '../../../components/Navbar';
import './styles.css';

const Login = () => {
    return(
        <>
        <Navbar />
            <div className="base-card login-card">
                <h1>LOGIN</h1>
                <form>
                    <div className="mb-4">
                        <input
                        type="text"
                        className="form-control base-input"
                        placeholder="Email"
                        name="username"
                        />
                    </div>
                    <div className="mb-2">
                        <input
                        type="text"
                        className="form-control base-input"
                        placeholder="Senha"
                        name="password"
                        />
                    </div>
                </form>
                <ButtonIcon text="FAZER LOGIN"/>
            </div>
            </>
    );
}
export default Login;
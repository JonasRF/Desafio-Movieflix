
import { useForm } from 'react-hook-form';
import ButtonIcon from '../../../components/ButtonIcon';
import Navbar from '../../../components/Navbar';
import './styles.css';

type FormData = {
    username: string;
    password: string;
}

const Login = () => {

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (formData: FormData) => {
        console.log(formData);
    }
    return(
        <>
        <Navbar />
            <div className="base-card login-card">
                <h1>LOGIN</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <input
                        {...register("username")}
                        type="text"
                        className="form-control base-input"
                        placeholder="Email"
                        name="username"
                        />
                    </div>
                    <div className="mb-2">
                        <input
                        {...register("password")}
                        type="text"
                        className="form-control base-input"
                        placeholder="Senha"
                        name="password"
                        />
                    </div>
                    <div>
                    <ButtonIcon text="FAZER LOGIN"/>
                    </div>
                </form>
            </div>
            </>
    );
}
export default Login;
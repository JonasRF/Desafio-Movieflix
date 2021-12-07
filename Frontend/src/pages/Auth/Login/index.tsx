import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../AuthContext';
import ButtonIcon from '../../../components/ButtonIcon';
import { getTokenData } from '../../../util/auth';
import { requestBackendLogin } from '../../../util/requests';
import { saveAuthData } from '../../../util/storage';
import './styles.css';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
    
  const { register, handleSubmit } = useForm<FormData>();

  const { setAuthContextData } = useContext(AuthContext);

  const history = useHistory();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
        console.log('SUCESSO', response);
        history.push('/movies');
      })
      .catch((error) => {
        console.log('ERRO', error);
      });
  };
  return (
    <>
      <div className="base-card login-card">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              {...register('username')}
              type="text"
              className="form-control base-input"
              placeholder="Email"
              name="username"
            />
          </div>
          <div className="mb-2">
            <input
              {...register('password')}
              type="password"
              className="form-control base-input"
              placeholder="Senha"
              name="password"
            />
          </div>
          <div>
            <ButtonIcon text="FAZER LOGIN" />
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;

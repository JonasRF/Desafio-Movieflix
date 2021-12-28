import { ReactComponent as AuthImage } from '../../assets/images/login.svg';
import { Switch , Route } from 'react-router-dom';
import Login from './Login';

import './styles.css';

const Auth = () => {

    return(
        <div className="auth-container">
            <div className="auth-banner-container">
                <h1>Avalie Filmes</h1>
                <p>Diga o que você achou do filme</p>
                <AuthImage />
            </div>
            <div className="auth-form-container">
            <Switch>
                <Route path="/">
                   <Login />
                </Route>
            </Switch>
            </div>
            </div>

    );
}
    export default Auth;

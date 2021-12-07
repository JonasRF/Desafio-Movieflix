import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import { getTokenData, isAuthenticaded } from '../../util/auth';
import history from '../../util/history';
import { removeAuthData } from '../../util/storage';
import './styles.css';

const Navbar = () => {

const { authContextData, setAuthContextData } = useContext(AuthContext);

useEffect(() => {
  if(isAuthenticaded()){
    setAuthContextData({
      authenticated: true,
      tokenData: getTokenData(),
    });
  } else {
    setAuthContextData({
      authenticated: false,
      tokenData: getTokenData(),
    });
  }
}, [setAuthContextData])

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
    authenticated: false,
    });
    history.replace('/');
  };

  return (
      <nav className="navbar main-nav">
        <div className="container-fluid">
          <Link to="/" className="LinkLogin">
            <h1>MovieFlix</h1>
          </Link>
          {authContextData.authenticated ? (
          <div className="nav-button-logout">
            <a href="#logout" onClick={handleLogoutClick}>
              <h6>SAIR</h6>
            </a>
          </div>
            ) : (
              undefined
           )}
        </div>
      </nav>
  );
};
export default Navbar;

import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <nav className="navbar main-nav">
        <div className="container-fluid">
          <Link to="/" className="LinkLogin">
            <h1>MovieFlix</h1>
          </Link>

          <div className="nav-button-logout">
            <a href="#logout" onClick={handleLogoutClick}>
              <h6>SAIR</h6>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

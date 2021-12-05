import Navbar from '../../components/Navbar';
import './styles.css';

const Movie = () => {
  return (
    <>
    <Navbar />
    <div className="container-movie">
      <h1>Tela listagem de filmes</h1>
      <div className="link-details-movie">
        <a href="link01">
          <p>Acessar Movies/1</p>
        </a>
        <a href="link02">
          <p>Acessar Movies/2</p>
        </a>
      </div>
    </div>
    </>
  );
};
export default Movie;

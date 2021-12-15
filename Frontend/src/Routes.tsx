import { Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Auth/Login";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import history from "./util/history";

const Routes = () => {
    return(
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/movies/:movieId" >
            <MovieDetails />
          </Route>
        </Switch>
      </Router>
    );
}
export default Routes;
import { Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Auth/Login";
import Movie from "./pages/Movie";
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
            <Movie />
          </Route>
        </Switch>
      </Router>
    );
}
export default Routes;
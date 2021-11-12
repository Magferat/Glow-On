import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Components/Home/Home';
import DashBoard from './Components/DashBoard/DashboardPage/DashBoard';
import AddProducts from './Components/DashBoard/AddProducts/AddProducts';
import Login from './Components/LogIn/Login';
import ExploreProducts from './Components/ExploreProducts/ExploreProducts';
import Purchase from './Components/Purchase/Purchase';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFond from './Components/NotFound/NotFond';

function App() {
  return (
    <div >
      <AuthProvider> <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/dashboard">
            <DashBoard />
          </PrivateRoute>
          <Route path="/addproducts">
            <AddProducts />
          </Route>

          <Route path="/explore">
            <ExploreProducts />
          </Route>

          <PrivateRoute path="/purchase/:productId">
            <Purchase />
          </PrivateRoute>
          <Route path="/home">
            <Home />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*"> <NotFond /></Route>
        </Switch>
      </Router> </AuthProvider>

    </div>
  );
}

export default App;

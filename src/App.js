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
import UserOrder from './Components/DashBoard/UserOrder/UserOrder';
import MakeAdmin from './Components/DashBoard/MakeAdmin/MakeAdmin';

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
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/addproducts">
            <AddProducts />
          </Route>
          {/* <Route path="/userOrders/:email">
            <UserOrder />
          </Route> */}
          <Route path="/explore">
            <ExploreProducts />
          </Route>
          <Route path="/explore">
            <MakeAdmin />
          </Route>
          <Route path="/purchase/:productId">
            <Purchase />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router> </AuthProvider>

    </div>
  );
}

export default App;

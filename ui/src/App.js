import './App.css';
import Login from './Components/Login/login';
import Signup from './Components/Signup/signup';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <Router>
   
        <Switch>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/signup">
            <Signup/>
          </Route>

          <Route path="/">
              <Login/>
          </Route>

      </Switch>
   
  </Router>
  );
}

export default App;

import { Switch, Route, Link} from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';

import Logout from './components/Logout';
import Login from './components/Login';
import Friends from './components/Friends';

import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Da Homiez</h1>
        <ul>
          <Link to="/login">
            <li className="link">
              Login
            </li>
          </Link>
          <Link to="/logout">
            <li className="link">
              Logout
            </li>
          </Link>
          {/* <li>
            {isLoggedIn ? <Link to="/protected">Protected Page</Link>:<div></div> }
          </li>
          */}
        </ul>
      </header>
      <Switch>
        <ProtectedRoute exact path="/friends" component={Friends}/>
        <ProtectedRoute path="/logout" component={Logout}/>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

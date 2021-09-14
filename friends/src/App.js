import { Switch, Route, Link} from 'react-router-dom';
import Friends from './components/Friends';
import ProtectedRoute from './components/ProtectedRoute';
import Logout from './components/Logout';
import Login from './components/Login';

import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Freinds List</h1>
        <ul>
          <li className="link">
            <Link to="/login">Login</Link>
          </li>
          <li className="link">
            <Link to="/logout">Logout</Link>
          </li>
          {/* <li>
            {isLoggedIn ? <Link to="/protected">Protected Page</Link>:<div></div> }
          </li>
          */}
        </ul>
      </header>
      <Switch>
        <ProtectedRoute exact path="/protected" component={Friends}/>
        <ProtectedRoute path="/logout" component={Logout}/>
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import Home from './Home'
import Careers from './Careers'
import About from './About'
import Login from './Login'
import Brochure from './Brochure'
function App() {
  return (
    <div className="App">
     <nav>
        <ul>
          
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Brochure">Brochure</Link>
          </li>
          <li>
            <Link to="/Careers">Careers</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/About">
          <About />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Careers">
          <Careers />
        </Route>
        <Route path="/Brochure">
          <Brochure />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

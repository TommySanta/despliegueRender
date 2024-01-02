import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Info from './components/info';
import Registro from './components/Registro';

const App = () => {
  return (
    <Router>
      <div className="container mt-3">
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <NavLink to="/info" className="nav-link">
                Info
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/registro" className="nav-link">
                Registro
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/info" component={Info} />
          <Route path="/registro" component={Registro} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
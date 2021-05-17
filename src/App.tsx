import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.global.css';
import Hello from './components/Hello';
import Photo from './components/Photos';

export default function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/photo" exact>
          Photo
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/photo" component={Photo} />
        <Route exact path="/" component={Hello} />
      </Switch>
    </Router>
  );
}

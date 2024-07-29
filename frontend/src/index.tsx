import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/login" Component={Login} />
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/" Component={Home} />
    </Switch>
  </Router>
);

export default App;

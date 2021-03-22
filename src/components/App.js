import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/landing.js'
import Header from './header'
import './styles/app.scss'

function App() {
  return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Landing} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
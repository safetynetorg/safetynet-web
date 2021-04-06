import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/landing.js'
import PrivacyPolicy from './pages/privacy-policy.js'
import TermsAndConditions from './pages/terms-and-condition.js'
import Header from './header'
import Footer from './footer'
import './styles/app.scss'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/privacypolicy" exact component={PrivacyPolicy} />
          <Route path="/termsandconditions" exact component={TermsAndConditions} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
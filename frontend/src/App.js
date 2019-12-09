import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import CalculatorPage from './content/Calculator';
import ContactPage from './content/Contact';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/Calculator" component={CalculatorPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './NavBar';
import Page from './Page';
import Page2 from './Page2';

// class component
class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/latin_americas" component={Page} /> 
          <Route exact path="/apacs" component={Page2} /> 
        </div>
      </Router>
    );
  }
  }

export default App;

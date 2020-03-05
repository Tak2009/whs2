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

  state = {
    sites: null,
    sites_apac: null
    }

  componentDidMount() {
    fetch("http://localhost:3000/latinamericas")
      .then(response => response.json())
      .then(sites => this.setState({ 
        sites: sites,
       }));
    fetch("http://localhost:3000/apacs")
       .then(response => response.json())
       .then(sites_apac => this.setState({ 
         sites_apac: sites_apac,
        }));
  } 

  render() {
    console.log(this.state)
    console.log(this.state.sites)
    console.log(this.state.sites_apac)
    return (
      <div>
        {this.state.sites_apac ?
      <Router>
        <div>
          <NavBar />
          {/* <Route exact path="/latin_americas" component={Page} sites={this.state.sites}/>  */}
          <Route exatc path="/latin_americas" render={routerProps => <Page {...routerProps} sites={this.state.sites}/>}/>
          {/* <Route exact path="/apacs" component={Page2} sites_apac={this.state.sites_apac}/>  */}
          <Route exatc path="/apacs" render={routerProps => <Page2 {...routerProps} sites_apac={this.state.sites_apac}/>}/>
        </div>
      </Router>
      : null}
      </div>
    );
  }
  }

export default App;

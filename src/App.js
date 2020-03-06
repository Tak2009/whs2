import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './NavBar';
import Page from './Page';
import Page2 from './Page2';
import Page3 from './Page3';

// class component
class App extends Component {

  state = {
    sites: null,
    sites_apac: null,
    sites_europe_a: null
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
    fetch("http://localhost:3000/europe_americas")
        .then(response => response.json())
        .then(sites_europe_a => this.setState({ 
          sites_europe_a: sites_europe_a,
         }));
  } 

  render() {
    console.log(this.state)
    console.log(this.state.sites)
    console.log(this.state.sites_apac)
    console.log(this.state.sites_europe_a)
    return (
      <div>
        {this.state.sites_europe_a ?
      <Router>
        <div>
          <NavBar />
          {/* <Route exact path="/latin_americas" component={Page} sites={this.state.sites}/>  */}
          <Route exatc path="/latin_americas" render={routerProps => <Page {...routerProps} sites={this.state.sites}/>}/>
          {/* <Route exact path="/apacs" component={Page2} sites_apac={this.state.sites_apac}/>  */}
          <Route exatc path="/apacs" render={routerProps => <Page2 {...routerProps} sites_apac={this.state.sites_apac}/>}/>
          <Route exatc path="/europe_america" render={routerProps => <Page3 {...routerProps} sites_europe_a={this.state.sites_europe_a}/>}/>
        </div>
      </Router>
      : null}
      </div>
    );
  }
  }

export default App;

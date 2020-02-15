import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import logo from './assets/logo.svg';

// class component
class App extends Component {

state = {
  sites: null,
  site: null,
  }

componentDidMount() {
    fetch("http://localhost:4000/latinamericas")
      .then(response => response.json())
      .then(sites => this.setState({ 
        sites: sites,
        site: sites[0]
       }));
}

nextSite = () => {
  const newIndex = this.state.site.index+1;
  this.setState({
    site: this.state.sites[newIndex]
  })
}

prevSite = () => {
  const newIndex = this.state.site.index-1;
  this.setState({
    site: this.state.sites[newIndex]
  })
}


render() {
  console.log(this.state.sites)
  console.log(this.state.site)
  const {sites, site} = this.state;
  return (
    <div>
      {this.state.site ?
      <div className="App">

        <button 
          onClick={this.nextSite} 
          disabled={site.index === sites.length-1}
        >Next</button>
        <button 
          onClick={this.prevSite} 
          disabled={site.index === 0}
        >Prev</button>

        <div className="page">
            <section>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>World Heritage Site</h1>
            </section>

            <div className="col">
              <div className={`cards-slider active-slide-${site.index}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${site.index*(100/sites.length)}%)`
                }}>
                  {sites.map(site => <Card key={site.id} whsite={site} />)}
                  
                </div>
              
              </div>
            </div>

        </div>
      </div>
      : null}
     </div>
  );
}
}

export default App;

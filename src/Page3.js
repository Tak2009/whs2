import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import logo from './assets/logo.svg';


// class component
class Page3 extends Component {

  state = {
    sites: this.props.sites_europe_a,
    site: this.props.sites_europe_a[0],
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
  console.log(this.state)
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
                <h1>World Heritage Sites in Europe and North America Region</h1>
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

export default Page3;

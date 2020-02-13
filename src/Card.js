import React from 'react';
import PropTypes from 'prop-types';

const Card = ({whsite}, props) => {
    // const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = site;
    const {index, id, region, site} = whsite;
    console.log(props.site)
    console.log(site)
    return (
        <div id={`card-${index}`} className="card">
           
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    {region}<br />
                    {site}
                </p>
                <ul className="features">
                    <li className="icon-bed">{index} <span>bedrooms</span></li>
                    <li className="icon-bath">{id} <span>bathrooms</span></li>
                    <li className="icon-car">{region} <span>parking spots</span></li>
                    {/* <li className="icon-car">{props.site.id} <span>id</span></li> */}
                </ul>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;
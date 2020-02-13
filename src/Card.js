import React from 'react';
import PropTypes from 'prop-types';

const Card = ({whsite}) => {
    // const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = site;
    const {index, id, site, image_url, states, http_url} = whsite;
    
    return (
        <div id={`card-${index}`} className="card">
           <a href={http_url}><img src={image_url} alt={id}/></a>
            <div className="details">
                <span className="index"></span>
                <p className="location">
                    {site}
                </p>
                <ul className="features">
                    <li className="icon-house">{states} <span>Country</span></li>
                </ul>
            </div>
        </div>
    )
}

Card.propTypes = {
    whsite: PropTypes.object.isRequired
}

export default Card;
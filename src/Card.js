import React from 'react';
import PropTypes from 'prop-types';

const Card = ({whsite}) => {
    const {index, id, site, image_url, states, http_url, short_description} = whsite;
    console.log(image_url)
    return (
        <div id={`card-${index}`} className="card">
           <img src={image_url} alt={id}/>
            <div className="details">
                <span className="index"></span>
                <p className="location">{site}</p>
                <ul className="features">
                    <li className="icon-house">{states} <span>Country</span></li>
                </ul>
                <p>{short_description}</p>
                <a href={http_url}rel="noopener noreferrer" target="_blank"><p>
                    More Details
                </p></a>
            </div>
        </div>
    )
}

Card.propTypes = {
    whsite: PropTypes.object.isRequired
}

export default Card;
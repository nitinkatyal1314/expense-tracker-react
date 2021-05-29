import React from 'react';
import './Card.css';

const Card = (props) => {
    let divClass = "card " + props.className; 
    return (
    <div className={divClass}>{props.children}</div>
    )
}

export default Card;
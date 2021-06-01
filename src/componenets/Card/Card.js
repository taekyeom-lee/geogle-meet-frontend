import React from 'react';
import './Card.css'

const Card = ({ name, email }) => {
    const url = "https://github.com/identicons/" + name  + ".png";
    return (
        <div className="card">
            <img className="card-img" alt={name} src={url}/>
            <div className="card-text">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <button className="card-button">Join</button>
            </div>
        </div>
    )
}

export default Card;
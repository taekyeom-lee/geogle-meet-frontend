import React from 'react';
import './Card.css'

const Card = ({ id, name, job, img }) => {
    return (
        <div className="card">
            <img className="card-img" alt={id} src={require(`../../img/${img}`).default} />
            <div className="card-text">
                <p>Name: {name}</p>
                <p>Job: {job}</p>
                <button className="card-button">Join</button>
            </div>
        </div>
    )
}

export default Card;
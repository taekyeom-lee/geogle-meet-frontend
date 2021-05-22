import React from 'react';
import Card from '../Card/Card';
import './CardList.css'

const CardList = ({ tutor }) => {
    return (
        <div className="cardlist">
            { 
                tutor.map((user, i) => {
                    return (
                        <Card 
                            key={i}
                            id={tutor[i].id}
                            name={tutor[i].name}
                            job={tutor[i].job}
                            img={tutor[i].img}                    
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;
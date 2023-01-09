import React from 'react'
import './RestaurantCards.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestaurantCard({ item }) {
    return (

        <Link to={`/ViewRestaurant/${item.id}`}>
            <div className="a-box">
                <div className="img-container">
                    <div className="img-inner">
                        <div className="inner-skew">
                            <img src={item.photograph}>
                            </img>
                        </div>
                    </div>
                </div>
                <div className="text-container">
                    <h3>{item.name}</h3>
                    <div>
                        <p>Cuisine Type : {item.cuisine_type}</p>
                        <p>Neighborhood : {item.neighborhood}</p>
                    </div>
                </div>
            </div>
        </Link >

    )
}

export default RestaurantCard
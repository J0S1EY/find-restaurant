import React from 'react';
import './RestaurantView.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import OperatingHours from './OperatingHours';
import Rivew from './Rivew';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RestaurantsData } from '../redux Action/rsstaurantlistAction';


function RestaurantView() {
    const urlParams = useParams() // fetchin url id
    // console.log(urParams.id);
    // fetch array of data from api
    // const [RestaurantList, setRestaurant] = useState([])
    // const fetchData = async () => {
    //     await fetch('/restaurants.json').then((response) => response.json() // api call
    //         .then((data) => setRestaurant(data.restaurants)))
    // }

    const dispatch = useDispatch()
    // To get updated state from store 
    const {restuarantList} = useSelector((state) => state.restlistReducer)
    console.log(restuarantList)


    // fetch data on page loading
    useEffect(() => {

        dispatch(RestaurantsData())
        // fetchData()
    }, [])
    //  console.log(RestaurantList)

    // find restaurent using irlparam id
    const restaurantView = restuarantList.find(item => (
        item.id == urlParams.id
    ))
    //console.log(restaurantView)
    return (
        <div >
            {
                restaurantView ? ( //restaurant details view
                    <Row className='view m-5'>
                        <Col md={3} >
                            <Image className='border rounded' fluid src={restaurantView.photograph}></Image>
                        </Col>
                        <Col md={6}>
                            <ListGroup>
                                <h3 className='rname'>{restaurantView.name} </h3>
                                <ListGroup.Item>{"Cuisine Type : " + restaurantView.cuisine_type}</ListGroup.Item>
                                <ListGroup.Item>{"Neighborhood : " + restaurantView.neighborhood}</ListGroup.Item>
                                <ListGroup.Item>{"Address : " + restaurantView.address}</ListGroup.Item>
                                <ListGroup.Item>{"Latlng : " + " lat- " + restaurantView.latlng.lat + ", lng " + restaurantView.latlng.lng}</ListGroup.Item>
                                <ListGroup.Item>
                                    <OperatingHours OHours={restaurantView.operating_hours} />
                                </ListGroup.Item>
                                <Row className='mt-3'>
                                    <Rivew comments={restaurantView.reviews} /> {/* restaurant review  to child component*/ }
                                </Row>
                            </ListGroup>
                        </Col>
                    </Row>
                ) : 'No Data To Display'
            }
        </div>
    )
}

export default RestaurantView
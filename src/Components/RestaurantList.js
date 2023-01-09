import React from 'react'
import { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantsData } from '../redux Action/rsstaurantlistAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function RestaurantList() {
    // const [RestaurantList, setRestaurant] = useState([])// store array of data from api
    // api calling async and await 

    // const fetchData = async () => {
    //     await fetch('/restaurants.json').then((data) => data.json()
    //         .then(list => setRestaurant(list.restaurants)))
    // }


    // dispatch for action calling 
    const dispatch = useDispatch()
    // To get updated state from store 
    const {restuarantList} = useSelector((state) => state.restlistReducer)
    console.log(restuarantList)

    // to load data or values when a component is loaded
    useEffect(() => {
        // fetchData() 
        dispatch(RestaurantsData())  // redux action call using dispatch 
    }, [])

    return (
        //RestaurantList
        <>
            <Row>
                {
                    restuarantList.map(restaurant => (
                        <Col md={6} lg={4} xl={3}>
                            <RestaurantCard item={restaurant} /> {/* data share to chid restaurant card*/}
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default RestaurantList
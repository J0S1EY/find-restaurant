import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { R_SUCCESS, R_FAIL } from "../Constants/RestaurantsConstants";

export const RestaurantsData = () => async (dispatch) => { // state updation function for action and export function 
    try {
        const { data } = await axios.get('/restaurants.json') // api call using axios
       // console.log(data);
        dispatch({
            type: R_SUCCESS,
            payload: data.restaurants
        })
    } catch (error) {
        dispatch({
            type: R_FAIL,
            error: error
        })
    }
}

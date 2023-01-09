// reducers
import { R_SUCCESS, R_FAIL } from '../Constants/RestaurantsConstants'

export const restaurantlistReducer = (state = { restuarantList: [] }, action) => {
    switch (action.type) {
        case R_SUCCESS:
            return {
                restuarantList: action.payload

            }

        case R_FAIL:
            return {
                restuarantList: action.error
            }
        default:
            return state
    }


}
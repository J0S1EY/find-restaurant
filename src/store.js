// to store updated state 
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {restaurantlistReducer} from '../src/Reducers/RestaurantlistReducers'

const reducers = combineReducers({
    restlistReducer:restaurantlistReducer
   

}) 

// reducer 
const middleWare = [thunk]
const store = createStore(reducers, applyMiddleware(...middleWare)) //(...middleWare)spread operator  function overloading 
export default store 
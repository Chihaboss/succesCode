import { createStore } from 'redux';
import { combineReducers } from 'redux';
import reducerCourses from './Reducers/ReducerCourses';
import reducerCart from './Reducers/reducerCart';

const rootReducer = combineReducers({

    courses : reducerCourses,
    cart: reducerCart

})



const store = createStore(rootReducer);




export default store;
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import reducerCourses from './Reducers/ReducerCourses';

const rootReducer = combineReducers({

    courses : reducerCourses,

})



const store = createStore(rootReducer);




export default store;
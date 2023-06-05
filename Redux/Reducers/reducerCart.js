import PaidCourse from "../../Data/PaidCourseModel"
import { ADD_TO_CART } from "../constants";



const initialState = {
    cartCourses : [],
    total: 0
}




const reducerCart= (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const course = action.course;
            const idCourse = course.id;
            const price = course.price;
            const title = course.title;


            const newcourse = new PaidCourse(idCourse, price, title);

            return {
                ...state,
                cartCourses: state.cartCourses.concat(newcourse),
                total: state.total + price
            }
            

           default:
                return state;
                
    }

}

export default reducerCart;
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderIcon from "../components/CustomHeaderIcon";
import Landing from "../Screen/Landing";
import CourseInfos from "../Screen/CourseInfos";
import Cart from "../Screen/Cart";
import globaleStyles from "../Styles/globaleStyles";

const CoursesStackNavigator = createStackNavigator();

export const CoursesNavigator = () => {
    return (
        <CoursesStackNavigator.Navigator
        screenOptions={({navigation})=> (
            {
                headerStyle: {backgroundColor: globaleStyles.green},
                headerTitleStyle: {fontWeight: 'bold'},
                headerTintColor : globaleStyles.white,
                headerRight : () => {
                   return (
                   <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}
                    >
                        <Item 
                        title="Panier"
                        iconName="shopping-cart"
                        onPress={()=>navigation.navigate('Cart')}
                        />
                    </HeaderButtons>
                    )
                }
            }
        )}
        
        >
            <CoursesStackNavigator.Screen 
                name="Landing"
                component={Landing}
            />
            <CoursesStackNavigator.Screen 
                name="Details"
                component={CourseInfos}
                options={({route}) =>(
                    {
                        title: route.params.title
                    }
                ) }
            /> 
            <CoursesStackNavigator.Screen 
                name="Cart"
                component={Cart}
            /> 
        </CoursesStackNavigator.Navigator>
    )
}

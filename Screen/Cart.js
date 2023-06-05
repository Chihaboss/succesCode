import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
 
 const cartCourses = useSelector (state => state.cart.cartCourses);
 const total = useSelector (state => state.cart.total);
 
 
  return (
    <View>
      <Text>Cart</Text>
    </View>
  )
}



const styles = StyleSheet.create({})


export default Cart
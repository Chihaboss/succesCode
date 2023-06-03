import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CourseItem from '../components/CourseItem.js'
import EmptyMsg from '../components/EmptyMsg.js'

const Landing = ({navigation}) => {
  
  
  const existingCourses = useSelector(state => state.courses.existingCourses)
  
  if (existingCourses.length) { 
  
  
  return (
    <FlatList 
      data={existingCourses}
      renderItem={({item}) => (
        <CourseItem 
        image = {item.image}
        title = {item.title}
        price = {item.price}
        viewDetails = {() => navigation.navigate('Details',
        {
          courseId : item.id,
          title : item.title
        }
        )}
        onAddToCart = {() => alert('Panier')}
        
        
        
      />

      )}
    
    />

  )
}
    return <EmptyMsg text="Pas de cours"/>


} 



const styles = StyleSheet.create({})

export default Landing;
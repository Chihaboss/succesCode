import { ScrollView, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import globalstyles from '../Styles/globaleStyles'
import { MaterialIcons } from '@expo/vector-icons';
import { addTocart } from '../Redux/actions/actionAddToCart';


const CourseInfos = ({navigation, route}) => {
  
  const courseId = route.params.courseId

  const dispatch = useDispatch();
  
  const selectedCourse = useSelector(state => state.courses.existingCourses.find(course => course.id === courseId))
  
  const handleAddToCart = () => {
    dispatch(addTocart(selectedCourse));
    navigation.goBack();
    alert('Formation ajoutee au panier');
  }

  if (!selectedCourse) {
    // Vous pouvez retourner un composant d'erreur ou null ici
    return null;
  }
  
  return (
   <View>
    
    <ScrollView style={styles.scroll}>
        <Image 
          source = {{uri: selectedCourse.image}}
          style = {styles.courseImage}
        />
    <View style={styles.courseDetails}>
        
        <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
        <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
        <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
        <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
        <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
    </View>

    </ScrollView>

    <View style={styles.footerContainer}>
        <View style={styles.footerTop}>
          <View style={styles.coursePriceWrapper}>
                <Text style={styles.coursePrice}>{selectedCourse.price}$</Text>
            </View>

          </View>
          <View style={styles.footerBottom}>
          <MaterialIcons 
          name="arrow-back" 
          size={24} 
          color= {globalstyles.white}
          onPress={() => navigation.goBack()}
          
          />
          <TouchableOpacity
              onPress={handleAddToCart}
          >
            <View style = {styles.btnAddTocart}>
              <Text style = {styles.btnAddTocartText}>Ajouter au panier</Text>
            </View>
          </TouchableOpacity>

          </View>
        </View>
    </View> 
  )
}



const styles = StyleSheet.create({

 scroll : {
        backgroundColor : globalstyles.white,
        height: '80%'
 },
 courseImage : {
    width :'100%',
    height : 250

 },

 courseDetails : {
  padding: 20,
  alignItems:'center'
 },

 courseDescription : {
  color: globalstyles.dimGray,
  fontSize: 17,
  marginHorizontal: 20,
  marginVertical: 10
 },

 footerContainer: {
  height: '20%',
  
 },

  footerTop : {
    height: '40%',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },

 coursePriceWrapper :{
  paddingRight: 40,
 },

 coursePrice : {
  fontSize: 24,
  color : globalstyles.green
 },

 footerBottom: {
    backgroundColor: globalstyles.green,
    height: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30
 },

 btnAddTocart: {
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: globalstyles.lightOrange
 },
 btnAddTocartText: {
    fontSize: 19,

 }

})


export default CourseInfos
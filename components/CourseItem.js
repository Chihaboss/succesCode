import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import globaleStyles from '../Styles/globaleStyles'

const CourseItem = (props) => {
  return (
    <View style={styles.courseContainer}>
        <View style={styles.imageContainer}>
            <Image 
            
            source={{uri:props.image}}
            style={styles.image}
            />
        </View>
        <View style={styles.courseContainerDetails}>
            <Text style={styles.courseTitle}>{props.title}</Text>
            <Text style={styles.coursePrice}>{props.price}$</Text>

        </View>
      
    </View>
  )
}



const styles = StyleSheet.create({
    courseContainer: {
        backgroundColor: globaleStyles.white,
        borderRadius : 10,
        height: 300,
        margin: 25,
        borderColor: globaleStyles.lightGrey,
        borderWidth: 1
        
    },
    imageContainer: {
        width: "100%",
        height: "60%",

    },
    image: {
        width : '100%',
        height : '100%'
    },

    courseContainerDetails: {
        alignItems: 'center',
        height: '20%',
        padding: 10
    },

    courseTitle : {
        fontSize: 18,
        marginVertical: 4,
        color: globaleStyles.green,
        fontWeight: 'bold',
        textTransform: 'uppercase'

    },
    coursePrice: {
        color: globaleStyles.darkGrey,
        fontSize: 16,

    }

})

export default CourseItem
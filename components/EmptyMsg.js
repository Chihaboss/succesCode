import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globaleStyles from '../Styles/globaleStyles'

const EmptyMsg = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center'
    },

    text: {
        fontSize: 19,
        color: globaleStyles.green
    }
})



export default EmptyMsg
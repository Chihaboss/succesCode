import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { MaterialIcons } from '@expo/vector-icons';
import globaleStyles from '../Styles/globaleStyles';

const CustomHeaderIcon = (props) => {
  return (
    <HeaderButton 
        {...props}
        IconComponent={MaterialIcons}
        iconSize={24}
        color={globaleStyles.white}
    
    
    />
  )
}

export default CustomHeaderIcon


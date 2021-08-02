import React from 'react'
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const CustomHeaderButton = props => (
    <HeaderButton 
        {...props}
        IconComponent={ Ionicons }
        iconSize={ 23 }
        color={Platform.OS === 'android' ? 'black' : 'white'}
    />
)

export default CustomHeaderButton;

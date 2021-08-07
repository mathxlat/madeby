import React, { useContext } from 'react'
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../theme/theme-context';

const CustomHeaderButton = props => {
    const { theme } = useContext(ThemeContext);
    return(
        <HeaderButton 
            {...props}
            IconComponent={ Ionicons }
            iconSize={ 23 }
            color={theme.color}
        />
    )
}

export default CustomHeaderButton;

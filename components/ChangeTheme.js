import React, { useContext } from 'react'
import { View, Switch } from 'react-native'
import { ThemeContext } from '../theme/theme-context'

const ChangeTheme = () => {
    const { dark, toggle } = useContext(ThemeContext);
    return (
    <View>
        <Switch 
            trackColor={{ false: '#767577', true: '#ccc' }}
            thumbColor={ dark ? '#fff' : '#20222E' }
            onChange={toggle}
            value={dark}
        />
    </View>
    )
}



export default ChangeTheme;

import React, { createContext, useState } from 'react';

const themes = {
    dark: {
        backgroundColor: '#1A1D29',
        backgroundCard: '#20222E',
        backgroundTab: '#20252e',
        color: '#fafafa',
        colorSecundary: '#dadada',
    },
    light: {
        backgroundColor: '#eff0f3',
        backgroundCard: '#fafafa',
        backgroundTab: '#f9f9f9',
        color: '#222',
        colorSecundary: '#333'
    },
}

const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => {},
};

const ThemeContext = createContext(initialState);

function ThemeProvider({ children }){
    const [ dark, setDark ] = useState(false);

    const toggle = () =>{
        setDark(!dark);
    }
    const theme = dark ? themes.dark : themes.light;

    return (
        <ThemeContext.Provider value={{dark, theme, toggle}} >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext };
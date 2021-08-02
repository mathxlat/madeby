import { URL_AUTH_SIGNUP, URL_AUTH_LOGIN } from '../../services/database'
import { storeData, getData } from '../../data/AsyncStorage';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const DATA = 'DATA';


export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_AUTH_SIGNUP, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
        });

        if(!response.ok) throw new Error('No se ha podido registrar');

        const resData = await response.json();

        storeData(resData);

        dispatch({type: SIGNUP, token: resData.idToken, user: resData.localId })
    }
}

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_AUTH_LOGIN,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
        });

        if(!response.ok) throw new Error('No se pudo acceder');

        const resData = await response.json();

        storeData(resData);

        dispatch({ type: LOGIN, token: resData.idToken, user: resData.localId});
    }
}

export const data = () => {
    return async dispatch => {
        const resData = await getData()
        resData ? 
        dispatch({ type: DATA, token: resData.idToken, user: resData.localId})
        : null;
    }
}
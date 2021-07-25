import { URL_AUTH_SIGNUP, URL_AUTH_LOGIN } from '../../services/database'

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN'

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

        dispatch({ type: LOGIN, token: resData.idToken, user: resData.localId});
    }
}
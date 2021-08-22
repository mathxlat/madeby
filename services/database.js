import { API_FIREBASE } from '@env';

export const URL_API ='https://madeby-735a6-default-rtdb.firebaseio.com/';

export const URL_AUTH_SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_FIREBASE}`
export const URL_AUTH_LOGIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_FIREBASE}`
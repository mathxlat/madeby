import { MAP_API_KEY } from '../../services/map';

export const ADD_ADDRESS = 'ADD_ADDRESS';

export const addAddress = location => {
    return async dispatch => {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${MAP_API_KEY}`);
        const resData = await response.json();
        const address = resData.results[0].formatted_address;
        dispatch({ type: ADD_ADDRESS, address: address, coords: { lat: location.lat, lng: location.lng } })
    }
}
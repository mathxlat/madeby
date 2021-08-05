import { ADD_ADDRESS } from "../actions/address.actions";

const INITIAL_STATE = {
    address: null,
    coords: null,
}

const AddressReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ADDRESS: 
            return {
                ...state,
                address: action.address,
                coords: action.coords,
            }
        default:
            return state;
    }
}

export default AddressReducer;
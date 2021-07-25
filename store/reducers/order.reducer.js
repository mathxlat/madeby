import { GET_ORDERS, DELETE_ORDER } from "../actions/order.action";

const INITIAL_STATE = {
    items: [],
}

const OrderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                items: action.payload,
            }
        case DELETE_ORDER: 
            const updated = state.items.filter(item => item.id !== action.order);
            return {
                ...state,
                items: updated,
            }
        default: 
            return state;
    }
}

export default OrderReducer;
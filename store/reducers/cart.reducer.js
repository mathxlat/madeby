import { ADD_ITEM, DELETE_ITEM, CONFIRM_CART } from "../actions/cart.action";


const INITIAL_STATE = {
    items: [],
    total: 0,
    confirm: false,
}

const sumTotal = list => list
    .map(item => item.quantity * item.price)
    .reduce((a, b) => a + b, 0)


const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const indexItem = state.items.findIndex(item => item.id === action.item.id);

            if (indexItem === -1) {
                const item = {...action.item, quantity: 1}
                const updated = [...state.items, item ];
                return{
                    ...state,
                    items: updated,
                    total: sumTotal(updated),
                };
            }

            const updated = state.items.map(item => {
                if (item.id === action.item.id) item.quantity++;
                return item;
            })

            return {
                ...state,
                items: updated,
                total: sumTotal(updated),
            }

        case DELETE_ITEM:
            const cleanCart = state.items.filter(item => item.id !== action.itemID);
            return{
                ...state,
                items: cleanCart,
                total: sumTotal(cleanCart),
            }

        case CONFIRM_CART:
            return{
                ...state,
                items: [],
                total: 0,
                confirm: false,
            }

        default:
            return state;
    }
}

export default CartReducer;
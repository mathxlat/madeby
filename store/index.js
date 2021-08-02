import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk";


import CategoryReducer from './reducers/category.reducer'
import ProductReducer from './reducers/product.reducer'
import CartReducer from './reducers/cart.reducer'
import AuthReducer from "./reducers/auth.reducer";
import OrderReducer from "./reducers/order.reducer";
import SavesReducer from './reducers/saves.reducer';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
    auth: AuthReducer,
    orders: OrderReducer,
    saves: SavesReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))
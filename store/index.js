import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk";


import CategoryReducer from './reducers/category.reducer'
import ProductReducer from './reducers/product.reducer'
import CartReducer from './reducers/cart.reducer'

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))
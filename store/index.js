import { createStore, combineReducers } from 'redux'

import CategoryReducer from './reducers/category.reducer'
import ProductReducer from './reducers/product.reducer'

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
})

export default createStore(RootReducer)
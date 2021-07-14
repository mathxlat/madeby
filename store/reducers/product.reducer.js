import { PRODUCTOS } from '../../services/productos'
import { SELECT_PRODUCT, FILTER_PRODUCT } from '../actions/product.action'

const INITIAL_STATE = {
    products: PRODUCTOS,
    filteredProducts: [],
    selected: null,
}

const ProductReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_PRODUCT:
            return {
                ...state,
                selected: state.products.find(product => product.id === action.productID)
            };
        case FILTER_PRODUCT:
            return {
                ...state,
                filteredProducts: state.products.filter(product => product.category === action.categoryID)
            };
        default:
            return {...state};
    }
}

export default ProductReducer;
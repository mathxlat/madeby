import React from 'react'
import DetailItem from '../components/DetailItem'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../store/actions/cart.action'

const DetailScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.products.selected) || {}

    handleAddItem = () => dispatch(addItem(item));

    return (
        <DetailItem item={item} onAdd={handleAddItem} navigation={navigation} />
    )
}

export default DetailScreen;
import React, { useEffect, useState } from 'react'
import DetailItem from '../components/DetailItem'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../store/actions/cart.action'
import { addSave, loadSaves, deleteSave } from '../store/actions/saves.action';

const DetailScreen = () => {
    const [itemSave, setItemSave] = useState(false)
    const dispatch = useDispatch();
    const item = useSelector(state => state.products.selected) || {}
    const saves = useSelector(state => state.saves.saves);

    const {id, category, createdby, name, image, description, price} = item;
    const handleAddItem = () => dispatch(addItem(item));

    const onHandlerSave = () => {
        dispatch(addSave(id, category, createdby, name, image, description, price));
        setItemSave(true)
    }
    const onHandlerRemoveSave = () => {
        const result = saves.find(item => item.itemId === id);
        dispatch(deleteSave(result.id))
        setItemSave(false)
    }


    useEffect(() =>{
        dispatch(loadSaves())
    }, [])

    useEffect(() =>{
        const result = saves.find(item => item.itemId === id);
        if (result) {
            setItemSave(true)
        } else {
            setItemSave(false)
        }
    }, [])

    return (
        <DetailItem item={item} onAdd={handleAddItem} onSave={onHandlerSave} onRemoveSave={onHandlerRemoveSave} itemSave={itemSave} />
    )
}

export default DetailScreen;
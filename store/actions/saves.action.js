import { insertSaves, fetchSaves, deleteSaves } from "../../db";

export const ADD_SAVE = 'ADD_SAVE'
export const LOAD_SAVES = 'LOAD_SAVES'
export const DELETE_SAVE = 'DELETE_SAVE'

export const addSave = (itemId, category, createdby, name, image, description, price) => {
    return async dispatch => {
        try {
            const result = await insertSaves(
                itemId, 
                category, 
                createdby, 
                name, 
                image, 
                description, 
                price
            )
            dispatch({ type:ADD_SAVE, payload: { id: result.insertId, itemId, category, createdby, name, image, description, price }});
        } catch (err) {
            console.log(err)
        }
    }
}

export const loadSaves = () => {
    return async dispatch => {
        try{
            const result = await fetchSaves();
            dispatch({ type: LOAD_SAVES, saves: result.rows._array })
        } catch (err) {
            console.log(err)
        }
    }
}

export const deleteSave = (id) => {
    return async dispatch => {
        try{
            const result = await deleteSaves(id);
            dispatch({ type: DELETE_SAVE, saves: result.rows._array })
        } catch (err) {
            console.log(err)
        }
    }
}
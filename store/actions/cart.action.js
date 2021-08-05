import { URL_API } from "../../services/database";

export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const CONFIRM_CART = 'CONFIRM_CART'


export const addItem = item => ({
    type: ADD_ITEM,
    item,
})

export const deleteItem = itemID => ({
    type: DELETE_ITEM,
    itemID,
})

export const confirmCart = (payload, user, address) => {
    return async (dispatch) => {
        try{
            await fetch(`${URL_API}/ordenes.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items: { ...payload },
                    address,
                    user,
                })
                })
            dispatch({
                type: CONFIRM_CART,
                confirm: true,
            });
        } catch {
            console.log(error.message)
        }
    }
}
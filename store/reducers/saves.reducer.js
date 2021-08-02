import { ADD_SAVE, LOAD_SAVES, DELETE_SAVE } from "../actions/saves.action";
import Save from '../../models/Save'

const INITIAL_STATE = {
    saves: []
}

const SavesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_SAVE:
            const newSave = new Save(
                action.payload.id.toString(),
                action.payload.itemId.toString(),
                action.payload.category,
                action.payload.createdby,
                action.payload.name,
                action.payload.image,
                action.payload.description,
                action.payload.price,
            )
            return {
                ...state,
                saves: state.saves.concat(newSave),
            }
        case LOAD_SAVES:
            return {
                ...state,
                saves: action.saves.map(item => new Save(
                    item.id.toString(),
                    item.itemId.toString(),
                    item.category,
                    item.createdby,
                    item.name,
                    item.image,
                    item.description,
                    item.price,
                ))
            }
        case DELETE_SAVE:
            return {
                ...state,
                saves: action.saves.map(item => new Save(
                    item.id.toString(),
                    item.itemId.toString(),
                    item.category,
                    item.createdby,
                    item.name,
                    item.image,
                    item.description,
                    item.price,
                ))
            }
        default:
            return state;
    }
}


export default SavesReducer;
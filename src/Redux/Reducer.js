import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM, SET_ITEMS } from "./Action"

const initialState = {
    items: [],
}

export const myReducer = (state = initialState, action) => {

    if (action.type === ADD_ITEM) {
        return { ...state, items: [...state.items, action.payload] };
    }
    else if (action.type === EDIT_ITEM) {
        return { ...state, items: state.items.map((item) => item.id === action.payload.id ? action.payload : item) };
    }
    else if (action.type === REMOVE_ITEM) {
        return { ...state, items: state.items.filter((item) => item.id !== action.payload) };
    }
    else if (action.type === SET_ITEMS) {
        return { ...state, items: action.payload };
    }
    else{
        return state;
    }

}
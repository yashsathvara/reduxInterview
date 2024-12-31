export const ADD_ITEM = "ADD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SET_ITEMS = "SET_ITEMS";

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}
export const editItem = (item) => {
    return {
        type: EDIT_ITEM,
        payload: item
    }
}
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}

export const setItem = (items) => {
    return {
        type: SET_ITEMS,
        payload: items
    }
}
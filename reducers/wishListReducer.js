const ADD_WISHLIST_ITEM = 'wishList/addItem';
const REMOVE_WISHLIST_ITEM = 'wishList/removeItem';

export function addWishListItem(productId) {
    return {
        type: ADD_WISHLIST_ITEM,
        payload: { productId }
    }
}

export function removeWishListItem(productId) {
    return {
        type: REMOVE_WISHLIST_ITEM,
        payload: { productId }
    }
}

export function wishListReducer(state = [], action) {

    if (action.type === ADD_WISHLIST_ITEM) {
        return [...state, action.payload]
    }
    else if (action.type === REMOVE_WISHLIST_ITEM) {
        return state.filter(item => item.productId !== action.payload.productId)
    }
    else {
        return state;
    }
}
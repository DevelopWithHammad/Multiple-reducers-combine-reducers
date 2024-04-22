const ADD_CART_ITEMS = 'cart/addItem'
const REMOVE_CART_ITEMS = 'cart/removeItem';
const ADD_CART_ITEMS_QUANTITY = 'cart/addItemQuantity';
const REMOVE_CART_ITEMS_QUANTITY = 'cart/removeItemQuantity';

export function increaseCartItemQuantity(productId) {
    return {
        type: ADD_CART_ITEMS_QUANTITY,
        payload: { productId }
    }
}

export function decreaseCartItemQuantity(productId) {
    return {
        type: REMOVE_CART_ITEMS_QUANTITY,
        payload: { productId }
    }
}

export function addCartItem(productId, quantity) {
    return {
        type: ADD_CART_ITEMS,
        payload: { productId, quantity }
    }
}

export function removeCartItem(productId) {
    return {
        type: REMOVE_CART_ITEMS,
        payload: { productId }
    }
}

export function cartReducer(state = [], action) {
    if (action.type === ADD_CART_ITEMS) {
        return [...state, action.payload]
    }
    else if (action.type === REMOVE_CART_ITEMS) {
        return state.filter(cartItem => cartItem.productId !== action.payload.productId)
    }
    else if (action.type === ADD_CART_ITEMS_QUANTITY) {
        return state.map((cartItem) => {
            if (cartItem.productId === action.payload.productId) {
                return { ...cartItem, quantity: cartItem.quantity + 1 }
            }
            return cartItem
        })

    }
    else if (action.type === REMOVE_CART_ITEMS_QUANTITY) {
        return state.map((cartItem) => {
            if (cartItem.productId === action.payload.productId) {
                return { ...cartItem, quantity: cartItem.quantity - 1 }
            }
            return cartItem;
        }).filter(cartItem => cartItem.quantity > 0)
    }
    return state;
}
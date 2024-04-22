import { combineReducers, createStore } from "redux";

import {
    cartReducer,
    decreaseCartItemQuantity,
    increaseCartItemQuantity,
    addCartItem,
    removeCartItem
} from "./reducers/cartReducer";

import {
    wishListReducer,
    addWishListItem,
    removeWishListItem
} from "./reducers/wishListReducer";

import { productReducer, removeProduct, removeProduct } from "./reducers/productReducer";

const reducer = combineReducers({
    product: productReducer,
    cartItems: cartReducer,
    wishList: wishListReducer
})

const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch(decreaseCartItemQuantity(7));
store.dispatch(increaseCartItemQuantity(1));
store.dispatch(addCartItem(1, 3));
store.dispatch(removeCartItem(1));
store.dispatch(addCartItem(3, 2));
store.dispatch(addWishListItem(3));
store.dispatch(removeWishListItem(3));
store.dispatch(removeProduct(3));


console.log("store ====>", store.getState());
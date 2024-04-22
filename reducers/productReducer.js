import { productList } from "../productList";
const REMOVE_PRODUCT = "product/remove";

export function removeProduct(productId) {
    return {
        type: REMOVE_PRODUCT,
        payload: { productId }
    }
}

export function productReducer(state = productList, action) {
    if (action.type === REMOVE_PRODUCT) {
        return state.filter(product => product.id !== action.payload.productId)
    }
    return state
}
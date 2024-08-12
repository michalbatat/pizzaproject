export const saveOrderDetails = (order) => {
    return {
        type: "SAVE_ORDER_DETAILS",
        payload: order
    }
}

export const addToCart = (pro, qty) => {
    return {
        type: "ADD_TO_CART",
        payload: { ...pro,quantityOrdered: qty }
    }
}
export const updateProduct = (id, qty) => {
    return {
        type: "UPDATE_PRODUCT",
        payload: { id, qty }
    }
}
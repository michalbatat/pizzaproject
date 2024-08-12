const initialState = {
    cart: [], customer: null,

}
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            state.cart.push(action.payload)
            return {
                ...state,
                cart: [...state.cart]
            }

        case "SAVE_ORDER_DETAILS":
            return {
                ...state,
                details: action.payload
            }
        case "UPDATE_PRODUCT": {
            return { ...state, cart: [...state.cart] }
        }
        default: return state;


    }
}
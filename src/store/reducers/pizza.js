const initialState = {
    currnetCustomer: null,
    pizzaArr: [],
    cart: {
        customer:null,
        arr: []
    },
}

export const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PIZZA":
            return {
                ...state,
                pizzaArr: [state.pizzaArr, action.payload],
            }
        case "ADD_PIZZA_TO_CART":
            {
                state.cart.arr.push(action.payload)

                return {
                    ...state,
                   arr: [...state.cart.arr]
                }
            }

        default:
            return state;
    }
}


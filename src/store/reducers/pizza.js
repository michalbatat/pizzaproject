const initialState = {
    pizzaArr: []
}

export const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PIZZA":
            return {
                ...state,
                pizzaArr: [state.pizzaArr, action.payload]
            }


        default: return state;
    }
}
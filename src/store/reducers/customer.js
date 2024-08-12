const initialState = {
    currnetCustomer:null,
}

export const customerReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SAVE_CUSTOMER":
            return {
                ...state,
                currnetCustomer: action.payload
            }
        case "EXITE_CUSTOMER":
            return {
                ...state, 
                currnetCustomer: null
            }
        default:
            return state;

    }

}
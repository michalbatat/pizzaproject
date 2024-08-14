const initialState = {
    currnetCustomer:null,
}

export const customerReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SAVE_CUSTOMER":
            console.log(action.payload)
            let c=action.payload;
            console.log(c)
            return {
            
                ...state,
               currnetCustomer:c,
              
               
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
export const saveCusromer = (customer) => {
    return {
        type: "SAVE_CUSTOMER",
        payload: customer
    }
}

export const exiteCustomer=(customer)=>{
    return{
        type:"EXITE_CUSTOMER",
        payload:customer
    }
}
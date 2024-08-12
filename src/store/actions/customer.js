export const saveCusromer = (customerArr) => {
    return {
        type: "SAVE_USER",
        payload: customerArr
    }
}

export const exiteCustomer=(customer)=>{
    return{
        type:"EXITE_USER",
        payload:customer
    }
}
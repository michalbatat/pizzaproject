export const addPizza=(pizza)=>{
    return{
        type:"ADD_PIZZA",
        payload:pizza
    }
}

export const addPizzaToCart = (pizza) => {
    return {
        type: "ADD_PIZZA_TO_CART",
        payload: { pizza }
    }
}
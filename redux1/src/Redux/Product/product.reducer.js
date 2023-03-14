import {DECR,INCR} from './product.action'
let initialState = {
    p_name : "iphone 8 ",
    price  : 100000,
    qty  : 1
};
let productReducer = (state = initialState, action) => {
    switch(action.type){
        case DECR : 
        return { ...state, qty : state.qty - 1 }
        case INCR : 
        return { ...state, qty : state.qty + 1}
        default:
            return state
    }
};
export {productReducer}

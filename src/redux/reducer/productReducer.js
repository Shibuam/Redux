import { actionTypes } from "../constants/action-types"
const initial_state = {
    products: []
}
export const ProductReducer = (state = initial_state, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return {...state,products:payload };
        default:
            return state



    }
}

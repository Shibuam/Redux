import {combineReducers} from 'redux'
import { ProductReducer } from './productReducer'
export const reducer =combineReducers({
    allProducts:ProductReducer
})
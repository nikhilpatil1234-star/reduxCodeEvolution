import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import IceCreamReducer from "./IceCream/IceCreamReducer";
import userReducer from "./user/userReducer";

const rootReducer=combineReducers({
cake:CakeReducer,
ice:IceCreamReducer,
user:userReducer
})


export default rootReducer
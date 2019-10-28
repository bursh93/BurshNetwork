import {applyMiddleware, combineReducers, createStore} from "redux";

import thunkMiddleware from "redux-thunk"
import usersReducer from "./Reducer/Users/usersReducer";



let reducers= combineReducers({

   UsersPage:usersReducer,


});
let store =createStore(reducers,applyMiddleware(thunkMiddleware));
window.store=store;




export default store;
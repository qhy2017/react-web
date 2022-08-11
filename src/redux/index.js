import { combineReducers } from 'redux'
import { configureStore  } from '@reduxjs/toolkit'
import { Outlet, NavLink, useNavigate,useLocation  } from "react-router-dom";
import {createBrowserHistory,createHashHistory} from "history";

let history = createBrowserHistory()
let hashHistory = createHashHistory()
 hashHistory.listen(function() {
    console.log("hashHistory")
    console.log(arguments)
 });
 
function counter(state = 0, action) {
	switch (action.type) {
		case 'INCREMENT':
            hashHistory.push("/link");
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

let combines = combineReducers({
	counters: counter,
	// visibilityFilter,
	// todos
});
const store = configureStore({
    reducer: combines
}) 

store.subscribe(function(item) {
    console.log(store.getState())
})
store.dispatch({
	type: 'INCREMENT'
});
export default store;

export const navigate = ()=> {  };
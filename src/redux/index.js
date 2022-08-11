import { combineReducers } from 'redux'
import { configureStore  } from '@reduxjs/toolkit'
 
function counter(state = 0, action) {
	switch (action.type) {
		case 'INCREMENT':
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

export default store;

export const navigate = ()=> {  };
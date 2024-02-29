import {createStore,combineReducers, applyMiddleware} from 'redux'
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';
import {thunk} from 'redux-thunk'

//redux dev tools with browser extension
import {composeWithDevTools} from 'redux-devtools-extension'
//combining multiple reducers
const rootReducer=combineReducers({
    account:accountReducer,
    customer:customerReducer
})

//creating store in redux
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store

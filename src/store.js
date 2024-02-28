import {createStore,combineReducers, applyMiddleware} from 'redux'
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';
import {thunk} from 'redux-thunk'
//combining multiple reducers
const rootReducer=combineReducers({
    account:accountReducer,
    customer:customerReducer
})

//creating store in redux
const store=createStore(rootReducer,applyMiddleware(thunk));
export default store

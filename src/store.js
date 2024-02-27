import {createStore,combineReducers} from 'redux'
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

//combining multiple reducers
const rootReducer=combineReducers({
    account:accountReducer,
    customer:customerReducer
})

//creating store in redux
const store=createStore(rootReducer);
export default store

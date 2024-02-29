import { createSlice } from "@reduxjs/toolkit"
const initialStateAccount = {
    balance:0,
    loan:0,
    loanPurpose:'',
    currency:'USD'
}
const accountReducer=createSlice({
    name:'account',
    initialState:initialStateAccount,
    reducers:{
        deposit(state,action){
            state.balance=state.balance+action.payload
        },
        withdraw(state,action){
            state.balance=state.balance-action.payload
        },
        requestLoan(state,action){
            if(state.loan>0) return
            state.loan=action.payload.amount
            state.balance=state.loan+state.balance
            state.loanPurpose=action.payload.purpose
        },
        payLoan(state,action){
           state.loanPurpose=''
            state.balance=state.balance-state.loan
            state.loan=0
        }
    }
})

const {deposit,payLoan,requestLoan,withdraw}=accountReducer.actions
export default accountReducer.reducer
export {deposit,payLoan,requestLoan,withdraw}

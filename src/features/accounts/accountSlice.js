const initialStateAccount = {
    balance:0,
    loan:0,
    loanPurpose:'',
    currency:'USD'
}

//reducer in redux
function accountReducer(state=initialStateAccount,action){
    switch(action.type){
        case 'account/deposit':
            return {...state,balance:state.balance+action.payload}
        case 'account/withdraw':
            return {...state,balance:state.balance-action.payload}
        case 'account/requestLoan':
            if(state.loan>0) return state
            return {...state,loan:action.payload.amount,loanPurpose:action.payload.purpose,balance:state.balance+action.payload.amount}
        case 'account/payLoan':
            return {
                ...state,
                loan:0,
                loanPurpose:'',
                balance:state.balance-state.loan
            }
        default:
            return state
    }
}

//action creator functions in redux
function deposit(amount,currency){
    //returns actions to reducer function
    if(currency==='USD')
        return {type:'account/deposit',payload:amount,currency:currency}
    return async function(dispatch,getState){
        //API call
       const host='api.frankfurter.app'
        const res=await fetch(`https://${host}/latest?amount=${amount}&from=${currency}&to=USD`)
        const data=await res.json()
        console.log(data)
        const converted=data.rates.USD
        dispatch({type:'account/deposit',payload:converted,currency:currency})
    }
}
function withdraw(amount){
  return  {type:'account/withdraw',payload:amount}
}
function requestLoan(amount,purpose){
    return {type:'account/requestLoan',payload:{amount:amount,purpose:purpose}}
}
function payLoan(){
    return {type:"account/payLoan"}
}
export default accountReducer
export {deposit,withdraw,payLoan,requestLoan,accountReducer}
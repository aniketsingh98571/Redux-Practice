const initialStateCustomer={
    name:"",
    id:"",
    createdAt:''
}
function customerReducer(state=initialStateCustomer,action){
    switch(action.type){
        case 'customer/create':
            return {...state,name:action.payload.name,id:action.payload.id,createdAt:action.payload.createdAt}
        case 'customer/update':
            return {...state,name:action.payload.name}
        default:
            return state
    }
}

function createCustomer(name,id){
    return {type:'customer/create',payload:{name:name,id:id,createdAt:new Date().getTime()/1000}}
}
function updateCustomer(name){
    return {type:'customer/update',payload:{name:name}}
}
export default customerReducer
export {updateCustomer,customerReducer,createCustomer}
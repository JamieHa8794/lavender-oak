import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import axios from "axios";

//action constatnts
const LOAD = 'LOAD'
const LOAD_USERS = 'LOAD_USERS';
const LOAD_PRODUCTS = 'LOAD_PRODUCTS'



// const initialState = {
//     users : [],
//     products: [],
//     loading: true
// }

//fix!

//reducers

const loadReducers = (state = true, action)=>{
    if(action.type === LOAD){
        state = false
    }
    return state;
}

const usersReducers = (state = [], action) =>{
    if(action.type === LOAD_USERS){
        state = action.users
    }
    return state;
}

const productsReducers = (state = [], action) =>{
    if(action.type === LOAD_PRODUCTS){
        state = action.products
    }
    return state;
}



const reducer = combineReducers({
    loading: loadReducers,
    users: usersReducers,
    products: productsReducers,
})

const store = createStore(reducer, applyMiddleware(thunk))


// const store = createStore((state = initialState, action)=>{
//     if(action.type === LOAD){
//         state = {...state, loading: false}
//     }
//     if(action.type === LOAD_USERS){
//         state = {...state, users: action.users}
//     }
//     if(action.type === LOAD_PRODUCTS){
//         state = {...state, products: action.products}
//     }
//     return state;
// })




//action creators
const _loading = () =>{
    return {
        type: LOAD
    }
}

const _loadUsers = (users) =>{
    return {
        type: LOAD_USERS,
        users
    }

}

const _loadProducts = (products) =>{
    return {
        type: LOAD_PRODUCTS,
        products
    }

}



//thunks
const loading = (dispatch) =>{
    return () =>{
        dispatch(_loading())
    }
}


const loadUsers =  (dispatch) =>{
    return async ()=>{
        const users = (await axios.get('/api/users')).data;
        dispatch(_loadUsers(users));
    }
}

const loadProducts = (dispatch) =>{
    return async ()=>{
        const products = (await axios.get('/api/products')).data;
        dispatch(_loadProducts(products));
    }
}


export default store;
export {loading, loadUsers, loadProducts}
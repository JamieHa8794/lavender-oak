import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import axios from "axios";

//action constatnts
const LOAD = 'LOAD'
const LOAD_USERS = 'LOAD_USERS';
const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
const LOAD_CARTS = 'LOAD_CARTS'


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


const cartsReducers = (state = [], action) =>{
    if(action.type === LOAD_CARTS){
        state = action.carts
    }
    return state;
}



const reducer = combineReducers({
    loading: loadReducers,
    users: usersReducers,
    products: productsReducers,
    carts: cartsReducers
})

const store = createStore(reducer, applyMiddleware(thunk))


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

const _loadCarts = (carts) =>{
    return{
        type: LOAD_CARTS,
        carts
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

const loadCarts = (dispatch) =>{
    return async () =>{
        const carts = (await axios.get('/api/carts')).data;
        dispatch(_loadCarts(carts));
    }
}


export default store;
export {loading, loadUsers, loadProducts, loadCarts}
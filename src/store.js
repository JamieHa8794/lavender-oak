import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import axios from "axios";

//action constatnts
const LOAD = 'LOAD'
const LOAD_USERS = 'LOAD_USERS';
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const LOAD_CARTS = 'LOAD_CARTS';
const ADD_TO_CART = 'ADD_TO_CART';

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
    if(action.type === ADD_TO_CART){
        state = [...state, action.cartItem]
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

const _addToCart = (cartItem) =>{
    return{
        type: ADD_TO_CART,
        cartItem
    }
}


//thunks
const loading = () =>{
    return (dispatch) =>{
        dispatch(_loading())
    }
}


const loadUsers =  () =>{
    return async (dispatch)=>{
        const users = (await axios.get('/api/users')).data;
        dispatch(_loadUsers(users));
    }
}

const loadProducts = () =>{
    return async (dispatch)=>{
        const products = (await axios.get('/api/products')).data;
        dispatch(_loadProducts(products));
    }
}

const loadCarts = () =>{
    return async (dispatch) =>{
        const carts = (await axios.get('/api/carts')).data;
        dispatch(_loadCarts(carts));
    }
}

const addToCart = (userId, productId) =>{
    return async (dispatch) =>{
        console.log(userId, productId)
        const cartItem = (await axios.post('/api/carts', {userId, productId})).data;
        console.log(cartItem)
        dispatch(_addToCart(cartItem));
    }
}

export default store;
export {loading, loadUsers, loadProducts, loadCarts, addToCart}
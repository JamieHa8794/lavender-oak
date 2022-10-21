import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import axios from "axios";

//action constatnts
const LOAD = 'LOAD'
const LOAD_USERS = 'LOAD_USERS';
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const LOAD_CARTS = 'LOAD_CARTS';
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_CART = 'UPDATE_CART';
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'
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
    if(action.type === UPDATE_CART){
        state = state.map(cartItem => cartItem.id !== action.cartItem.id ? cartItem : action.cartItem )
    }
    if(action.type === REMOVE_CART_ITEM){
        state = state.filter(cartItem => cartItem.id !== action.cartItem.id)
    }
    return state;
}

const authReducer = (state = {}, action) =>{
    if(action.type === LOG_IN){
        state = action.auth
    }
    if(action.type === LOG_OUT){
        state = {}
    }
    return state;
}



const reducer = combineReducers({
    loading: loadReducers,
    users: usersReducers,
    products: productsReducers,
    carts: cartsReducers,
    auth: authReducer,
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

const _updateCart = (cartItem) =>{
    return{
        type: UPDATE_CART,
        cartItem
    }
}

const _removeFromCart = (cartItem) =>{
    return{
        type: REMOVE_CART_ITEM,
        cartItem
    }
}

const _login = (auth) =>{
    return{
        type: LOG_IN,
        auth
    }
}

const _logout = () =>{
    return{
        type: LOG_OUT,
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
        const cartItem = (await axios.post('/api/carts', {userId, productId})).data;
        dispatch(_addToCart(cartItem));
    }
}

const updateCart = (_cartItem, count, history) =>{
    return async (dispatch) =>{
        const cartItem = (await axios.put(`/api/carts/${_cartItem.id}`, {count})).data;
        dispatch(_updateCart(cartItem))
    }
}

const removeFromCart = (cartItem, history) =>{
    return async (dispatch) =>{
        await axios.delete(`/api/carts/${cartItem.id}`)
        dispatch(_removeFromCart(cartItem))
        history.push('/cart')
    }
}

const login = (credentials) =>{
    return async (dispatch) =>{
        const {token} = (await(axios.post('/api/auth', credentials))).data;
        window.localStorage.setItem('token', token)
        exchangeToken();
        console.log(token)
        // dispatch(_login(authItem))
    }
}

const exchangeToken = () =>{
    return async (dispatch) =>{
        const token = window.localStorage.getItem('token')
        if(token){
            const user = (await(axios.get('/api/auth', {
                headers: {
                    authorization: token
                }
            }))).data;
            dispatch(_login(user))
        }
    }
}

const logout = () =>{
    console.log('log out pressed')
    return (dispatch) =>{
        window.localStorage.removeItem('token');
        dispatch(_logout());
    }
}

export default store;
export {loading, loadUsers, loadProducts, loadCarts, addToCart, updateCart, removeFromCart, exchangeToken, logout}
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
    return async (dispatch, getState) =>{
        if(!getState().auth.id){
            console.log('here')
            dispatch(getLocalCart())
        }
        const carts = (await axios.get('/api/carts')).data;
        dispatch(_loadCarts(carts));
    }
}

const resetLocalCart = () =>{
    return (dispatch) =>{
        const localCartItems = []
        window.localStorage.setItem('cart', JSON.stringify(localCartItems))
    }
}

const getLocalCart = () =>{
    return (dispatch) =>{
        const localCart = window.localStorage.getItem('cart')
        if(!localCart){
            dispatch(resetLocalCart())
            return;
        }
        else{
            return JSON.parse(localCart);
        }
    }
}

const addToCart = (productId) =>{
    return async (dispatch, getState) =>{

        if(getState().auth.id){
            const userId = getState().auth.id
            console.log(userId)

            if(getState().carts.find(cartItem => cartItem.productId === productId)){
                const cartItem = getState().carts.find(cartItem => cartItem.productId === productId)
                dispatch(increaseCart(cartItem))
                return;
            }

            const cartItem = (await axios.post('/api/carts', {userId, productId})).data;
            dispatch(_addToCart(cartItem));
        }
        else{
            const localCart = JSON.parse(window.localStorage.getItem('cart'))
            let localCartItem = localCart.find(localCartItem => localCartItem.productId === productId)
            if(!localCartItem){
                localCart.push({
                    'productId': productId,
                    'count': 1
                })
                window.localStorage.setItem('cart', JSON.stringify(localCart))
            }
            else{
                console.log(localCartItem)
                localCartItem.count = localCartItem.count + 1;
            }
        }
    }
}



const increaseCart = (_cartItem) =>{
    return async (dispatch, getState) =>{

        const carts = getState().carts
        const count = carts.find(cart => cart.id === _cartItem.id).count + 1;

        const cartItem = (await axios.put(`/api/carts/${_cartItem.id}`, {count})).data;
        dispatch(_updateCart(cartItem))
    }
}

const decreaseCart = (_cartItem, history) =>{
    return async (dispatch, getState) =>{

        const carts = getState().carts
        const count = carts.find(cart => cart.id === _cartItem.id).count - 1;
        if(count === 0){
            dispatch(removeFromCart(_cartItem))
            return;
        }
        const cartItem = (await axios.put(`/api/carts/${_cartItem.id}`, {count})).data;
        dispatch(_updateCart(cartItem))
    }
}


const removeFromCart = (cartItem) =>{
    return async (dispatch) =>{
        await axios.delete(`/api/carts/${cartItem.id}`)
        dispatch(_removeFromCart(cartItem))
    }
}

const login = (credentials, history) =>{
    return async (dispatch) =>{
        const {token} = (await(axios.post('/api/auth', credentials))).data;
        window.localStorage.setItem('token', token)
        dispatch(exchangeToken(history));
    }
}

const exchangeToken = (history) =>{
    return async (dispatch) =>{
        const token = window.localStorage.getItem('token')
        if(token){
            const user = (await(axios.get('/api/auth', {
                headers: {
                    authorization: token
                }
            }))).data;
            dispatch(_login(user))
            history.push('/');
        }
    }
}

const logout = (history) =>{
    return (dispatch) =>{
        window.localStorage.removeItem('token');
        dispatch(_logout());
        history.push('/');
    }
}

export default store;
export {loading, loadUsers, loadProducts, loadCarts, addToCart, decreaseCart, increaseCart,  removeFromCart, exchangeToken, login, logout}
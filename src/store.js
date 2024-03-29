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
const CLEAR_CART = 'CLEAR_CART';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const CREATE_USER = 'CREATE_USER';
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';



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
    if(action.type === UPDATE_USER_INFO){
        state = state.map(user => user.id !== action.user.id ? user : action.user)
    }
    if(action.type === CREATE_USER){
        state = [...state, action.user]
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
        state = action.carts;
    }
    if(action.type === ADD_TO_CART){
        state = [...state, action.cartItem];
    }
    if(action.type === UPDATE_CART){
        state = state.map(cartItem => cartItem.productId !== action.cartItem.productId ? cartItem : action.cartItem );
    }
    if(action.type === REMOVE_CART_ITEM){
        state = state.filter(cartItem => cartItem.productId !== action.cartItem.productId);
    }
    if(action.type === CLEAR_CART){
        state = [];
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

const _clearCart = () =>{
    return {
        type: CLEAR_CART
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

const _createUser = (user) =>{
    return{
        type: CREATE_USER,
        user
    }
}

const _updateUserId = (user) =>{
    return{
        type: UPDATE_USER_INFO,
        user
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

const updateUserInfo = (history, firstName, middleName, lastName, phoneNumber, email, streetAddress, city, zipCode) =>{
    return async (dispatch, getState)=>{
        const userId = getState().auth.id;
        const user = (await axios.put(`/api/users/${userId}`, {firstName, middleName, lastName, phoneNumber, email, streetAddress, city, zipCode})).data;
        dispatch(_updateUserId(user))
        dispatch(_login(user))
        history.push('/myProfile');
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
            const carts = dispatch(getLocalCart())
            console.log(carts)
            await dispatch(_loadCarts(carts))
        }
        else{
            const userId = getState().auth.id;
            const carts = (await axios.get(`/api/carts/${userId}`)).data;
            console.log('userId',userId)
            console.log('carts', )
            await dispatch(_loadCarts(carts));
        }
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
            // dispatch(_loadCarts(JSON.parse(localCart)))
            return JSON.parse(localCart);
        }
    }
}

const setLocalCart = (cart) =>{
    return (dispatch) =>{
        window.localStorage.setItem('cart', JSON.stringify(cart))
    }
}


const addToLocalCart = (productId) =>{
    return (dispatch) => {
        const localCart = JSON.parse(window.localStorage.getItem('cart'))
        let localCartItem = localCart.find(localCartItem => localCartItem.productId === productId)
        if(!localCartItem){
            const localCartItem = {
                'productId': productId,
                'count': 1
            }
            localCart.push(localCartItem)
            window.localStorage.setItem('cart', JSON.stringify(localCart))
            dispatch(_addToCart(localCartItem))
        }
        else{
            localCartItem.count = localCartItem.count + 1;
            dispatch(setLocalCart(localCart))
            dispatch(_updateCart(localCartItem))
        }

    }
}

const addToCart = (productId) =>{
    return async (dispatch, getState) =>{
        if(getState().auth.id){
            const userId = getState().auth.id


            if(getState().carts.find(cartItem => cartItem.productId === productId)){
                const cartItem = getState().carts.find(cartItem => cartItem.productId === productId)
                await dispatch(increaseCart(cartItem))
            }
            else{
                const cartItem = (await axios.post('/api/carts', {userId, productId})).data;
                dispatch(_addToCart(cartItem));
            }
        }
        else{
            dispatch(addToLocalCart(productId));
        }
    }
}


const increaseCart = (_cartItem) =>{
    return async (dispatch, getState) =>{
        
        if(getState().auth.id){
            const carts = getState().carts
            const count = carts.find(cart => cart.productId === _cartItem.productId).count + 1;
            const cartItem = (await axios.put(`/api/carts/${_cartItem.id}`, {count})).data;
            dispatch(_updateCart(cartItem))
            return;
        }
        else{
            const cart = dispatch(getLocalCart())
            const cartItem = cart.find(cart => cart.productId === _cartItem.productId)
            cartItem.count = cartItem.count + 1;
            dispatch(setLocalCart(cart))
            dispatch(_updateCart(cartItem))
        }


    }
}

const decreaseCart = (_cartItem, history) =>{
    return async (dispatch, getState) =>{

        if(getState().auth.id){
            const carts = getState().carts
            const count = carts.find(cart => cart.productId === _cartItem.productId).count - 1;
            if(count === 0){
                dispatch(removeFromCart(_cartItem))
                return;
            }
            const cartItem = (await axios.put(`/api/carts/${_cartItem.id}`, {count})).data;
            dispatch(_updateCart(cartItem))
            return;
        }
        else{
            const cart = dispatch(getLocalCart())
            const cartItem = cart.find(cart => cart.productId === _cartItem.productId)
            cartItem.count = cartItem.count - 1;
            if(cartItem.count === 0){
                dispatch(_removeFromCart(cartItem))
                const idx = cart.findIndex(cart => cart.productId === _cartItem.productId)
                cart.splice(idx, 1);
            }
            dispatch(setLocalCart(cart))
            dispatch(_updateCart(cartItem))
        }
    }
}


const removeFromCart = (_cartItem) =>{
    return async (dispatch, getState) =>{
        if(getState().auth.id){
            await axios.delete(`/api/carts/${_cartItem.id}`)
            dispatch(_removeFromCart(_cartItem))
        }
        else{
            const cart = dispatch(getLocalCart())
            const cartItem = cart.find(cart => cart.productId === _cartItem.productId)
            dispatch(_removeFromCart(cartItem))
            const idx = cart.findIndex(cart => cart.productId === _cartItem.productId)
            cart.splice(idx, 1);
            dispatch(setLocalCart(cart))
        }
    }
}

const clearCart = () =>{
    return (dispatch) =>{
        dispatch(_clearCart())
    }
}

const login = (credentials, history) =>{
    return async (dispatch, getState) =>{
        const {token} = (await(axios.post('/api/auth', credentials))).data;
        window.localStorage.setItem('token', token)
        dispatch(exchangeToken(history));
    }
}

const exchangeToken = (history) =>{
    return async (dispatch, getState) =>{
        const token = window.localStorage.getItem('token')
        if(token){
            const user = (await(axios.get('/api/auth', {
                headers: {
                    authorization: token
                }
            }))).data;
            await dispatch(_login(user))
            await dispatch(clearCart())

            await dispatch(loadCarts())

            const localCart = await dispatch(getLocalCart());

            if(localCart.length){
                for( const cartItem of localCart){
                    for(let i = cartItem.count; i>0; i--){
                        await dispatch(addToCart(cartItem.productId))
                    }
                }
            }
            await dispatch(resetLocalCart())
            history.push('/');
        }
    }
}

const logout = (history) =>{
    return (dispatch) =>{
        window.localStorage.removeItem('token');
        dispatch(_logout());
        dispatch(clearCart())
        history.push('/');
    }
}

const createUser = (username, password, email, history) =>{
    return async (dispatch)=>{
        const user = (await (axios.post('/api/users', {username, password, email}))).data
        console.log(user)
        dispatch(_createUser(user))
        history.push('/login')
    }
}



export default store;
export {loading, loadUsers, updateUserInfo, loadProducts, loadCarts, addToCart, decreaseCart, increaseCart,  removeFromCart, exchangeToken, login, logout, createUser}
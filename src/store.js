import { createStore } from "redux";



//action constatnts
const LOAD = 'LOAD'
const LOAD_USERS = 'LOAD_USERS';
const LOAD_PRODUCTS = 'LOAD_PRODUCTS'



const initialState = {
    users : [],
    products: [],
    loading: true
}


const store = createStore((state = initialState, action) =>{
    if(action.type === LOAD){
        state = {...state, loading: false}
    }
    if(action.type === LOAD_USERS){
        state = {...state, users: action.users}
    }
    if(action.type === LOAD_PRODUCTS){
        state = {...state, products: action.products}
    }
    return state;
})


//reducers
const usersReducers = () =>{


}

const productsReducers = () =>{

    
}

//action creators
const loading = () =>{
    return {
        type: LOAD,
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
const loadUsers = async () =>{
    const users = (await axios.get('/api/users')).data;
    loadUsers(users);
}

const loadProducts = async () =>{
    const products = (await axios.get('/api/products')).data;
    loadProducts(products);
}



export default store;
export {loading,loadUsers, loadProducts}
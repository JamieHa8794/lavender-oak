import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav'
import {loading, loadUsers, loadProducts, loadCarts, exchangeToken, login, logout} from './store'
import Products from './Products';
import Footer from './Footer'
import imgCard from './imgCard';
import SingleProduct from './SingleProduct';
import MoreInfo from './MoreInfo';
import ByCategory from './ByCategory';
import MyProfile from './MyProfile';
import Categories from './Categories';
import Cart from './Cart';
import LoginForm from './LoginForm';



class _App extends Component{
    constructor(){
        super();
    }
    async componentDidMount(){
        this.props.exchangeToken();
        this.props.load();
    }

    render(){
        const {loading, auth} = this.props.state
        const {login, logout} = this.props

        if(!auth.id){
            return(
                <LoginForm/>
            )
        }

        if(loading){
            return(
                <h1>loading...</h1>
            )
        }
        return(
            <Router>
                <div>
                    <Route component={Nav}/>
                    <button onClick={logout}>Log Out</button>
                    <Route path='/myProfile' component={MyProfile} exact/>

                    <Route path='/login' component={LoginForm} exact/>

                    <Route path='/products' component={Products} exact/>
                    <Route path='/products/:category' component={imgCard} exact/>
                    <Route path='/products/:category' component={ByCategory} exact/>
                    <Route path='/products/:category/:id' component={SingleProduct} exact/>
                    <Route path='/products/:category/:id' component={MoreInfo} exact/>


                    <Route path='/categories' component={Categories} exact/>

                    <Route path='/cart' component={Cart} exact/>


                    <Route component={Footer}/>
                </div>
            </Router>
        )
    }
    
}


const mapStateToProps = (state) =>{
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        load: () =>{
            dispatch(loadUsers()); 
            dispatch(loadProducts());
            dispatch(loadCarts());

            dispatch(loading());
        },
        exchangeToken: () =>{
            dispatch(exchangeToken());
        },
        login: (credentials) =>{
            dispatch(login(credentials))
        },
        logout: () =>{
            dispatch(logout());
        }
    }
}


const App = connect(mapStateToProps, mapDispatchToProps)(_App);

export default App;
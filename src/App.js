import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import {loading, loadUsers, loadProducts, loadCarts, exchangeToken, login} from './store'


import Nav from './Nav';
import Home from './Home';
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
import EditProfile from './EditProfile';



class _App extends Component{
    constructor(){
        super();
    }
    async componentDidMount(){
        this.props.exchangeToken();
        this.props.load();
    }

    render(){
        const {loading, auth} = this.props.state;

        if(loading){
            return(
                <h1>loading...</h1>
            )
        }
        return(
            <Router>
                <div>
                    <Route component={Nav}/>

                    <Route path='/' component={Home} exact/>

                    <Route path='/myProfile' component={MyProfile} exact/>
                    <Route path='/myProfile/editInfo' component={EditProfile} exact/>

                    <Route path='/login' component={LoginForm} exact/>

                    <Route path='/products' component={Products} exact/>

                    <Route path='/products/:pageNumber' component={Products} exact/>


                    <Route path='/products/category/:category' component={ByCategory} exact/>
                    <Route path='/products/category/:category' component={imgCard} exact/>
                    <Route path='/products/category/:category/:id' component={SingleProduct} exact/>
                    <Route path='/products/category/:category/:id' component={MoreInfo} exact/>


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
        }
    }
}


const App = connect(mapStateToProps, mapDispatchToProps)(_App);

export default App;
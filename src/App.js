import React, {Component} from 'react';
import { connect } from 'react-redux';

import Nav from './Nav'
import {loading, loadUsers, loadProducts} from './store'
import Products from './Products';
import Users from './Users';
import Footer from './Footer'


class _App extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.load();
    }
    render(){
        const {loading} = this.props.state
        if(loading){
            return(
                <h1>loading...</h1>
            )
        }
        return(
            <div>
                <Nav/>
                <Users/>
                <Products/>
                <Footer/>
            </div>
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
            dispatch(loadUsers(dispatch)); 
            dispatch(loadProducts(dispatch));
            dispatch(loading(dispatch));
        }
    }
}


const App = connect(mapStateToProps, mapDispatchToProps)(_App);

export default App;
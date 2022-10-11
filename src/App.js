import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav'
import {loading, loadUsers, loadProducts} from './store'
import Products from './Products';
import Users from './Users';
import Footer from './Footer'
import imgCard from './imgCard';

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
            <Router>
                <div>
                    <Route component={Nav}/>
                    <Route component={imgCard}/>
                    <Route path='/users' component={Users} exact/>
                    <Route path='/products' component={Products} exact/>
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
            dispatch(loadUsers(dispatch)); 
            dispatch(loadProducts(dispatch));
            dispatch(loading(dispatch));
        }
    }
}


const App = connect(mapStateToProps, mapDispatchToProps)(_App);

export default App;
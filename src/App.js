import React, {Component} from 'react';
import { connect } from 'react-redux';

import Nav from './Nav'
import {loading, loadUsers, loadProducts} from './store'
import Products from './Products';
import Users from './Users';


class _App extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.load();
    }
    render(){
        console.log(this.props)
        const {loading} = this.props.state
        if(loading){
            return(
                <h1>loading...</h1>
            )
        }
        return(
            <div>
                <Nav/>
                <hr/>
                <Users/>
                <Products/>
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
            dispatch(loadUsers());
            dispatch(loadProducts());
            dispatch(loading());
            
        }
    }
}


const App = connect(mapStateToProps, mapDispatchToProps)(_App);

export default App;
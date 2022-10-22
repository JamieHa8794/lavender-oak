import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {logout} from './store'

class Nav extends Component{
    constructor(){
        super();
        this.onClick = this.onClick.bind(this)
    }
    onClick(){
        const {history, logout} = this.props;

        logout(history);
    }
    render(){
        const {auth} = this.props.state;
        console.log(auth)
        const {onClick} = this
        
        if(Object.keys(auth).length === 0){
            console.log('here',auth)
            return(
                <nav>
                <img src='./public/logo.png' className='nav-logo'/>

                <Link to='/'>Home</Link>
                <Link to='/Products'>Products</Link>
                <Link to='/Categories'>Categories</Link>
                <Link to='/Login'>Login</Link>
                <Link to='/Cart'>Cart</Link>
            </nav>
            )
        }
        return(
            <nav>
                <img src='./public/logo.png' className='nav-logo'/>

                <Link to='/'>Home</Link>
                <Link to='/Products'>Products</Link>
                <Link to='/Categories'>Categories</Link>
                <Link to='/MyProfile'>My Profile</Link>
                <button onClick={onClick}>Log Out</button>
                <Link to='/Cart'>Cart</Link>
            </nav>
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
        logout: (history) =>{
            dispatch(logout(history));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
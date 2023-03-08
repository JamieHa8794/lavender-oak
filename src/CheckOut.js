import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

class CheckOut extends Component{
    constructor(){
        super();
        this.goShop = this.goShop.bind(this);

    }
    goShop(event){
        const {history} = this.props;


        history.push('/')
    }
    render(){
        const {goShop} = this

        return(
                <div className="main-box">
                    <Paper elevation={3} >
                        <div className='error-container'>
                            <img className='error-img' src='./public/error404.png'/>
                            <div className='error-message-heading'>
                                Whoops..This page is not yet ready...
                            </div>
                            <div className='error-message'>
                                Check back soon!
                            </div>
                            <button className='error-button' onClick={goShop}>
                               Go Back Home
                            </button>
                        </div>
                    </Paper>
                </div>



        )
    }
}




const mapStateToProps = (state) =>{
    return state;
}

// const mapDispatchToProps = () =>{
    
// }

export default connect(mapStateToProps)(CheckOut)
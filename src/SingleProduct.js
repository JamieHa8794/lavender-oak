import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {addToCart, increaseCart, updateCart} from './store'

import MoreInfo from './MoreInfo';


import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';


class SingleProduct extends Component{
    constructor(props){
        super(props)

        this.onClick = this.onClick.bind(this)
        this.goShop = this.goShop.bind(this);

    }

    onClick(){
        const {match, addToCart} = this.props
        
        const productId = match.params.id;

        addToCart(productId)

    }
    goShop(event){
        const {history} = this.props;


        history.push('/')
    }
    render(){
        const {products, match} = this.props
        const {onClick, goShop} = this

        const productId = match.params.id;
        const product = products.find(product => product.id === productId)
        // const product = false

        if(!product){
            console.log('here')
            return(
                <div className="main-box">
                    <Paper elevation={3} >
                        <div className='error-container'>
                            <img className='error-img' src='./public/error404.png'/>
                            <div className='error-message-heading'>
                                Whoops..
                            </div>
                            <div className='error-message'>
                                Something is missing here...
                            </div>
                            <button className='error-button' onClick={goShop}>
                               Continue Shopping
                            </button>
                        </div>
                    </Paper>
                </div>
            )
        }   

        return(
            <div className="main-box">
            <div className='single-product-back-to-products'>
                /<Link to='/products'>Products</Link>/<Link to={`/products/category/${product.category}`}>{product.category}s</Link>
            </div>
            <div className='single-product-container'>
                <img src={product.img} className='single-product-img'/>
                <div className='single-product-info-container'>
                    <div className='single-product-name'>
                        {product.name}
                    </div>
                    <div className='single-product-category'>
                        {product.category}
                    </div>
                    <div className='single-product-price'>
                        ${product.price}.00
                    </div>
                    <div className='single-product-short_description'>
                        {product.short_description}
                    </div>
                <Button
                    variant="contained"
                    onClick={onClick}
                            sx={{
                                backgroundColor: '#b299e5',
                                '&:hover': {
                                    backgroundColor: '#9370DB',
                                    boxShadow: 'none',
                                },
                                marginTop: '10px',
                                marginBottom: '10px',

                            }}>
                        Add to Cart
                    </Button>
                </div>
            </div>
            <MoreInfo />
        </div>
        )
    }
    

}


const mapStateToProps = (state) =>{
    return state;
}

const mapDispatchToProps = (dispatch) =>{
        return{
            addToCart: (productId) =>{
                dispatch(addToCart(productId))
            },
            increaseCart : (cartItem) =>{
                dispatch(increaseCart(cartItem))
            }
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
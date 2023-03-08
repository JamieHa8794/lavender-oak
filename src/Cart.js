import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {decreaseCart, increaseCart, removeFromCart} from './store'


import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Paper from '@mui/material/Paper';

class Cart extends Component{
    constructor(){
        super();

        this.subtract = this.subtract.bind(this);
        this.add = this.add.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.checkOut = this.checkOut.bind(this);
        this.goShop = this.goShop.bind(this);
    }
    subtract(event){
        const {carts, history, decreaseCart} = this.props;

        const cartItem = carts.find(item => item.productId === event.currentTarget.value)

        decreaseCart(cartItem, history)
    }
    add(event){
        const {carts, history, increaseCart} = this.props;
        // console.log(event.currentTarget.value)

        const cartItem = carts.find(item => item.productId === event.currentTarget.value)


        increaseCart(cartItem, history)
    }
    removeFromCart(event){
        const {carts, removeFromCart} = this.props;
        const cartItem = carts.find(item => item.productId === event.currentTarget.value)
        removeFromCart(cartItem)
    }
    checkOut(event){
        const {history} = this.props;


        history.push('/checkout')
    }
    goShop(event){
        const {history} = this.props;


        history.push('/Categories')
    }
    render(){
        const {carts, products, auth} = this.props;
        const {subtract, add, removeFromCart, checkOut, goShop} = this

        const userId = auth.id;

        const cartItems = carts;

        if(cartItems.length === 0 || products.length === 0 ){
            return(
                <div className="main-box">
                    <Paper elevation={3} >
                        <div className='cart-empty-container'>
                            {/* <div className='cart-empty-heading'>
                                Shopping Cart
                            </div> */}
                            <img className='cart-empty-img' src='/public/empty-bag-img-2.png'/>
                            <div className='cart-empty-message-heading'>
                                Your Shopping Cart is Empty!
                            </div>
                            <div className='cart-empty-message'>
                                Looks like you haven't added anything to your cart yet...
                            </div>
                            <button className='cart-empty-button' onClick={goShop}>
                               Continue Shopping
                            </button>
                        </div>
                    </Paper>
                </div>
            )
        }
    

        const productList = {};
        cartItems.map(cartItem =>{
            products.map(product =>{
                if(cartItem.productId == product.id ){
                        productList[product.id] = product;
                }
            })
        })

        let sum = 0;
    

        cartItems.map(cartItem =>{
            const product = products.find(product => product.id === cartItem.productId)
            if(product){
                sum = sum + (cartItem.count * product.price *1)
            }
        })



        if(cartItems.length == 0){
            return(
                <div className="main-box">
                    
                </div>
            )
        }


        console.log('cartItems', cartItems);
        console.log('productList', productList);

        return(
        <div className="main-box">
            <div className='cart-container'>
                <div className='cart-left-container'>
                    <div className='cart-left-title'>
                        Shopping Cart
                    </div>
                    <ul className='cart-items-ul'>
                        {cartItems.map((cartItem, idx) =>{
                            return(
                                <li key={idx} className='cart-items-li'>
                                        <img src={productList[cartItem.productId].img} className='cart-items-img'/>

                                        <div className='cart-items-product-info-container'>
                                            <div className='cart-items-product-name'>
                                                {productList[cartItem.productId].name}
                                            </div>
                                            <div className='cart-items-product-id'>
                                                SKU#: {productList[cartItem.productId].id.slice(0,13)}
                                            </div>
                                            <Button 
                                            className='cart-items-count-remove'
                                            onClick={removeFromCart} value={productList[cartItem.productId].id}
                                            startIcon={<DeleteOutlinedIcon sx={{color: '#9370DB'}}/>}
                                            sx={{color: '#9370DB',}}
                                            >
                                                Remove
                                            </Button>
                                        </div>

                                        <div className='cart-items-count-container'>
                                            <IconButton 
                                            aria-label="delete"
                                            className='cart-items-count-subtract' onClick={subtract} value={productList[cartItem.productId].id} 
                                            >
                                                <RemoveCircleOutlineOutlinedIcon />
                                            </IconButton>
                                            {/* <button className='cart-items-count-subtract' onClick={subtract} value={productList[cartItem.productId].id} >-</button> */}
                                            <div className='cart-items-count-count'>
                                                {cartItem.count}
                                            </div>
                                            <IconButton 
                                            aria-label="delete"
                                            className='cart-items-count-add' onClick={add}  value={productList[cartItem.productId].id}
                                            >
                                                <AddCircleOutlineOutlinedIcon />
                                            </IconButton>
                                            {/* <button className='cart-items-count-add' onClick={add}  value={productList[cartItem.productId].id} >+</button> */}
                                        </div>

                                        <div>
                                            ${productList[cartItem.productId].price}.00
                                        </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='cart-right-container'>
                    <div className='cart-summary-container'>
                            <div className='cart-summary-summary'>
                                Order Summary:
                            </div>
                            <div>
                                Subtotal: {sum ? `$${sum}.00` : 0}
                            </div>
                            <div>
                                Taxes: {sum ? `$${(sum * 0.08875).toFixed(2)}` : 0}
                            </div>
                            <div>
                                Shipping: $49.99
                            </div>
                            <div>
                                Total: {sum ? `$${(((sum * 1.08875).toFixed(2)*1)+(49.99*1)).toFixed(2)}` : 0}
                            </div>
                    </div>
                    <Button 
                    onClick={checkOut} variant="contained"
                    sx={{
                        backgroundColor: '#b299e5',
                        '&:hover': {
                            backgroundColor: '#9370DB',
                            boxShadow: 'none',
                        },
                        marginTop: '10px',
                        marginBottom: '10px',

                    }}
                    >Check Out</Button>
                </div>
            </div>
        </div>
        )
    }
}



const mapStateToProps = (state) =>{
    return state;
}

const mapDispatchToProps = (dispatch) =>{
    return{
        removeFromCart: (cartItem) =>{
            dispatch(removeFromCart(cartItem))
        },
        updateCart : (cartItem, count, history) =>{
            dispatch(updateCart(cartItem, count, history))
        },
        decreaseCart : (cartItem, history) =>{
            dispatch(decreaseCart(cartItem, history))
        },
        increaseCart : (cartItem) =>{
            dispatch(increaseCart(cartItem))
        }
    }   
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)

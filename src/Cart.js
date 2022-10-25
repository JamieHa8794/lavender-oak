import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateCart, removeFromCart} from './store';



class Cart extends Component{
    constructor(){
        super();

        this.subtract = this.subtract.bind(this);
        this.add = this.add.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }
    subtract(event){
        const {carts, history, updateCart} = this.props;
        const cartItem = carts.find(item => item.productId === event.target.value)
        const count = cartItem.count -1;
        updateCart(cartItem, count, history)
    }
    add(event){
        const {carts, history, updateCart} = this.props;
        const cartItem = carts.find(item => item.productId === event.target.value)
        const count = cartItem.count + 1;
        updateCart(cartItem, count, history)
    }
    removeFromCart(event){
        const {carts, history, removeFromCart} = this.props;
        const cartItem = carts.find(item => item.productId === event.target.value)
        removeFromCart(cartItem, history)
    }
    render(){
        const {carts, products, auth} = this.props;
        const {subtract, add, removeFromCart} = this

        const userId = auth.id;

        const cartItems = carts.filter(cartItem => cartItem.userId == userId);
        console.log(userId)
        console.log(carts)
        if(carts.length === 0 || products.length === 0 ){
            return(
                <div>
                    Cart is empty
                </div>
            )
        }
    

        const productList = {};
        cartItems.map(cartItem =>{
            products.map(product =>{
                if(cartItem.productId == product.id){
                        productList[product.id] = product;
                }
            })
        })

        let sum = 0;
    

        cartItems.map(cartItem =>{
            const product = products.find(product => product.id === cartItem.productId)

            sum = sum + (cartItem.count * product.price *1)
        })

        if(cartItems.length == 0){
            return(
                <div>
                    Cart is empty
                </div>
            )
        }
        return(
        <div className='cart-container'>
            <div>
                <div>
                    Items in Cart: 
                </div>
                <ul>
                    {cartItems.map((cartItem, idx) =>{
                        return(
                            <li key={idx} className='cart-items-li'>
                                <img src={productList[cartItem.productId].img} className='cart-items-img'/>
                                <div className='cart-items-product-name'>
                                    {productList[cartItem.productId].name}
                                </div>
                                <div>
                                    ${productList[cartItem.productId].price}.00
                                </div>
                                <div className='cart-items-count-container'>
                                    <button onClick={subtract} value={productList[cartItem.productId].id} className='cart-items-count-subtract'>-</button>
                                    <div className='cart-items-count-count'>
                                        {cartItem.count}
                                    </div>
                                    <button onClick={add}  value={productList[cartItem.productId].id} className='cart-items-count-add'>+</button>
                                </div>
                                <button onClick={removeFromCart} value={productList[cartItem.productId].id}>Remove Item</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='cart-summary-container'>
                    <div className='cart-summary-summary'>
                        Summary:
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
                        Total: {sum ? `$${((sum * 1.08875).toFixed(2)*1)+(49.99*1)}` : 0}
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
        removeFromCart: (cartItem, history) =>{
            dispatch(removeFromCart(cartItem, history))
        },
        updateCart : (cartItem, count, history) =>{
            dispatch(updateCart(cartItem, count, history))
        }
    }   
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {addToCart, updateCart} from './store'




class SingleProduct extends Component{
    constructor(props){
        super(props)

        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        const user = {
            id: '9efa514d-7448-4f8f-8854-478e2611e68c'
        }
        const {match, carts, history, addToCart, updateCart} = this.props
        const productId = match.params.id;

        const cartItem = carts.find(cartItem => cartItem.productId === productId)

        if(cartItem){
            const count = cartItem.count + 1
            console.log('its already in there...', cartItem)
            updateCart(cartItem, count, history)
        }
        else{
            addToCart(user.id, productId)
        }
    }
    render(){
        const {products, match} = this.props
        const {onClick} = this

        const productId = match.params.id;
        const product = products.find(product => product.id === productId)


        if(!product){
            console.log('here')
            return(
            <div>
                Whoops nothing to see here...
                <Link to='/products'>Go back to all products...</Link>
            </div>
            )
        }   
        return(
            <div>
            <div className='single-product-back-to-products'>
                /<Link to='/products'>Products</Link>/<Link to={`/products/${product.category}`}>{product.category}s</Link>
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
                <button onClick={onClick} className='single-product-add-to-cart'>Add to Cart</button>
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
            addToCart : (userId, productId) =>{
                dispatch(addToCart(userId, productId))
            },
            updateCart : (cartItem, count, history) =>{
                dispatch(updateCart(cartItem, count, history))
            }
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
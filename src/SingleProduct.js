import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {addToCart, increaseCart, updateCart} from './store'



class SingleProduct extends Component{
    constructor(props){
        super(props)

        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        const {match, addToCart} = this.props
        
        const productId = match.params.id;

        addToCart(productId)

    }
    render(){
        const {products, match} = this.props
        const {onClick} = this

        const productId = match.params.id;
        const product = products.find(product => product.id === productId)

        if(!product){
            return(
            <div>
                Whoops nothing to see here...
                <Link to='/products'>Go back to all products...</Link>
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
            addToCart: (productId) =>{
                dispatch(addToCart(productId))
            },
            increaseCart : (cartItem) =>{
                dispatch(increaseCart(cartItem))
            }
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
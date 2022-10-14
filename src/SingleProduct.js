import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {addToCart} from './store'




class SingleProduct extends Component{
    constructor(){
        super()
        this.onClick = this.onClick.bind(this)
    }
    onClick(){
        const user = {
            id: 'e20feb6c-e0d7-4ca2-95c6-27a1a201f527'
        }
        const {products, match} = this.props
        const productId = match.params.id;


        const {addToCart} = this.props;

        addToCart(user.id, productId)
        console.log(user.id, productId) 
    }
    render(){
        const {products, match} = this.props
        const {onClick} = this

        const productId = match.params.id;
        console.log(productId)
        const product = products.find(product => product.id === productId)
        console.log(product)
        
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
                console.log('here')
            }
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
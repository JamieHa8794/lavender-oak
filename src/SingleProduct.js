import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const SingleProduct = ({products, match}) =>{
    const id = match.params.id;
    console.log(id)
    const product = products.find(product => product.id === id)
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
                <button className='single-product-add-to-cart'>Add to Cart</button>
                </div>
            </div>
        </div>

    )

}

const mapStateToProps = (state) =>{
    return state;
}

// const mapDispatchToProps = () =>{
    
// }

export default connect(mapStateToProps)(SingleProduct)
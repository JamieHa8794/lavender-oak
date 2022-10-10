import React from 'react';
import {connect} from 'react-redux'

const Products = ({products}) =>{
    return(
        <div>
            <ul className='products-ul'>
                {products.map((product, idx) =>{
                    return(
                        <li key={idx} className='products-li'>
                            <img src={product.img}/>
                            <div className='products-name'>
                                {product.name}
                            </div>
                            <div className='products-category'>
                                {product.category}
                            </div>
                            <div className='products-price'>
                                ${product.price}.00
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return state;
}

// const mapDispatchToProps = () =>{
    
// }

export default connect(mapStateToProps)(Products)
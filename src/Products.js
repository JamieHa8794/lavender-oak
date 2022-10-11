import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

const Products = ({products}) =>{
    products.sort((a, b) => {
        const idA = a.item_id;
        const idB = b.item_id
        if (idA < idB) {
          return -1;
        }
        if (idA > idB) {
          return 1;
        }
        return 0;
      });
    return(
        <div>
            <ul className='products-ul'>
                {products.map((product, idx) =>{
                    return(
                        <Link key={idx} to={`/products/${product.category}/${product.id}`}>
                        <li className='products-li'>
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
                        </Link>
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
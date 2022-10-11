import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const ByCategory = ({products, match}) =>{
    const category = match.params.category;
    const productsByCategory = products.filter(product => product.category === category)
    if(!productsByCategory){
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
            <div className='by-category-back-to-products'>
                /<Link to='/products'>Products</Link>
            </div>
            <div className="byCateory-title">
                {category}s
            </div>
            <ul className='products-ul'>
                {productsByCategory.map((product, idx) =>{
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

export default connect(mapStateToProps)(ByCategory)
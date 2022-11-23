import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const imgCardImgs = {
    'Bed':'https://www.ikea.com/global/assets/navigation/images/double-beds-16284.jpeg',
    'Sofa': 'https://www.ikea.com/global/assets/navigation/images/sofa-beds-10663.jpeg', 
    'TV Stand':'https://www.ikea.com/global/assets/navigation/images/tv-media-storage-14885.jpeg', 
    'Dining Table':'https://www.ikea.com/global/assets/navigation/images/dining-sets-up-to-10-seats-47361.jpeg', 
    'Desk':'https://www.ikea.com/global/assets/navigation/images/standing-desks-55008.jpeg', 
    'Rug':'https://www.ikea.com/global/assets/navigation/images/handmade-rugs-39267.jpeg', 
    'Dining Chair':'https://www.ikea.com/global/assets/navigation/images/dining-chairs-25220.jpeg', 
    'Computer Chair':'https://www.ikea.com/global/assets/navigation/images/conference-chairs-47068.jpeg', 
    'End Table':'https://www.ikea.com/global/assets/navigation/images/side-tables-10717.jpeg', 
    'Night Stand':'https://www.ikea.com/us/en/images/products/eket-storage-combination-with-legs-white-wood__0915075_pe784544_s5.jpg', 
    'Lamp':'', 
}


const ByCategory = ({products, match}) =>{
    const category = match.params.category;
    const productsByCategory = products.filter(product => product.category === category)
    if(!productsByCategory){
        return(
        <div>
            Whoops nothing to see here...
            <Link to='/products'>Go back to all products...</Link>
        </div>
        )
    }
    return(
        <div className="main-box">
            <div className='by-category-back-to-products'>
                /<Link to='/products'>Products</Link>/<Link to='/Categories'>Categories</Link>
            </div>


            <div className="byCateory-title">
                {category}s
            </div>

            <img className='by-category-img' src={imgCardImgs[category]}/>



            <ul className='products-ul'>
                {productsByCategory.map((product, idx) =>{
                    return(
                        <Link className='products-link' key={idx} to={`/products/category/${product.category}/${product.id}`}>
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
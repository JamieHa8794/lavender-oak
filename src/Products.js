import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';


const Products = ({products, match:{params}}) =>{
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


    const pageNumbersCount = products.length ? Math.ceil(products.length/20) : 1;
    const pageNumbers = new Array(pageNumbersCount).fill(0)
    
    const currentPage = params.pageNumber ? params.pageNumber : 1

    return(
        <div className='products'>

            <div className='products-imgCard-container'>
                <div className='products-imgCard-container-sub'>
                    <div className='products-imgCard-container-sub-box-1'></div>
                    <img className='products-imgCard-img' src='https://www.ikea.com/images/a-light-grey-slattum-upholstered-bed-and-white-nordli-chests-3b97d440fc5abb6b33ebb5a5a8ebca5b.jpg?f=sg'/>
                </div>
                <div className='products-imgCard-container-sub'>
                    <img className='products-imgCard-img' src='https://www.ikea.com/images/a-living-room-with-two-light-colored-sofas-and-a-light-rug-bc1e60af6e519d9a467bcc2aa55780c5.jpg?f=sg'/>
                    <div className='products-imgCard-container-sub-box-2'></div>
                </div>
                <div className='products-imgCard-container-sub'>
                    <div className='products-imgCard-container-sub-box-1'></div>
                    <img className='products-imgCard-img' src='https://www.ikea.com/images/a-lush-outdoor-space-with-a-dark-grey-viholmen-dining-furnit-8ed9fb1bc02e4f87e87d419d1c9b03cf.jpg?f=sg'/>
                </div>
                {/* <img className='products-imgCard-img' src=''/>
                <img className='products-imgCard-img' src=''/>
                <img className='products-imgCard-img' src=''/> */}
            
            </div>




            <div className='products-barrier'></div>

            <div className='products-pageNumber-container'>
                <div className='products-pageNumber-page'>Page: </div>
                <ul className='products-pageNumber-ul'>
                    {/* <Link to='/products'>View All</Link> */}
                    {pageNumbers.map((pageNumber, idx) =>{
                        return(
                            <Link key={idx} className='products-pageNumber-number' to={`/products/${idx+1}`}>{idx+1}</Link>
                            )
                        })}
                </ul>
            </div>
            <ul className='products-ul'>
                {products.map((product, idx) =>{

                    // if(currentPage === 0){
                    //     return(
                    //         <Link key={idx} to={`/products/category/${product.category}/${product.id}`}>
                    //         <li className='products-li'>
                    //                 <img src={product.img}/>
                    //                 <div className='products-name'>
                    //                     {product.name}
                    //                 </div>
                    //                 <div className='products-category'>
                    //                     {product.category}
                    //                 </div>
                    //                 <div className='products-price'>
                    //                     ${product.price}.00
                    //                 </div>
                    //         </li>
                    //         </Link>
                    //     )
                    // }

                    if(idx > (currentPage-1)*20-1 && idx < ((currentPage-1)*20 + 20)){
                        return(
                            <Link className='products-link' key={idx} to={`/products/category/${product.category}/${product.id}`}>
                            <li className='products-li'>
                                    <img className='products-img' src={product.img}/>
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
                    }
                })}
            </ul>
            <div className='products-pageNumber-container'>
                <ul>
                    {/* <Link to='/products'>View All</Link> */}
                    {pageNumbers.map((pageNumber, idx) =>{
                        return(
                            <Link key={idx} className='products-pageNumber-number' to={`/products/${idx+1}`}>{idx+1}</Link>
                            )
                        })}
                </ul>
            </div>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return state;
}

// const mapDispatchToProps = () =>{
    
// }

export default connect(mapStateToProps)(Products)
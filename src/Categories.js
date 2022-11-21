import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const CategoryList = [
    'Bed',
    'Sofa', 
    'TV Stand', 
    'Dining Table', 
    'Desk',
    'Rug',
    'Dining Chair', 
    'Computer Chair', 
    'End Table',
    'Night Stand', 
    'Lamp'
]

const CategoryListImgs = {
    'Bed':'https://www.ikea.com/ext/ingkadam/m/c72e5105ed3f157/original/PH185696-crop003.jpg?f=s',
    'Sofa': 'https://www.ikea.com/images/aepplaryd-series-3c0c4cd24b64d50b22830f8eced8002b.jpg?f=m', 
    'TV Stand':'https://www.ikea.com/ext/ingkadam/m/617073edfa962bd1/original/PH183023-crop001.jpg?f=xxl', 
    'Dining Table':'https://www.ikea.com/us/en/images/products/ingatorp-extendable-table-white__0870438_pe716642_s5.jpg?f=m', 
    'Desk':'https://www.ikea.com/us/en/images/products/trotten-desk-sit-stand-white__1040109_pe840587_s5.jpg?f=m', 
    'Rug':'https://www.ikea.com/us/en/images/products/overlund-rug-low-pile-multicolor__0941470_pe795490_s5.jpg?f=m', 
    'Dining Chair':'https://www.ikea.com/us/en/images/products/ekedalen-chair-brown-orrsta-light-gray__1052578_pe846233_s5.jpg?f=m', 
    'Computer Chair':'https://www.ikea.com/us/en/images/products/matchspel-gaming-chair-bomstad-white__1034557_pe837778_s5.jpg?f=m', 
    'End Table':'https://www.ikea.com/us/en/images/products/lack-side-table-black-brown__0836402_pe601418_s5.jpg?f=m', 
    'Night Stand':'https://www.ikea.com/us/en/images/products/idanaes-nightstand-white__0931775_pe791215_s5.jpg?f=m', 
    'Lamp':'https://www.ikea.com/ext/ingkadam/m/8d87d58baac79e8/original/PH177990-crop001.jpg?f=xxl',
}


const Categories = ({products}) =>{
    const alphaCategoryList = CategoryList.sort((a, b) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });
    

    return(
        <div>



        {/* <div className="categories-container">
                {alphaCategoryList.map((category, idx) =>{
                    if(idx < 3){
                        return(
                            <div className="categories-catergory-container">
                                <div className="categories-category-title">
                                    {category}s
                                </div>
                                <div className="categories-category-sub">
                                    <img className='categories-category-img' src={CategoryListImgs[category]} />
                
                                    <div className="categories-category-sub-items">
                                        {products.filter(product => product.category === category).map((product, idx) =>{
                                            if(idx < 6){
                                                return(
                                                    <div className="categories-category-sub-items-product-container">
                                                        <Link to={`products/category/${category}/${product.id}`}>
                                                        <img className="categories-category-sub-items-product-img" src={product.img}/>
                                                        <div className="categories-category-sub-items-product-name">{product.name}</div>
                                                        </Link>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>
    
    
                                <div className="categories-border"></div>
                            </div>  
                        )
                    }
                })}
        </div> */}

        <div className='categories-card-container'>
            <div className="categories-card-text">
                <div className="categories-card-text-heading">
                    Beds
                </div>
                <div className="categories-card-text-body">
                    Beds are great. Come buy one.
                </div>
            </div>
            <div className="categories-card-box">
                <img className="categories-card-box-img-double" src='https://www.ikea.com/us/en/images/products/idanaes-upholstered-bed-frame-gunnared-dark-gray__0975283_pe812720_s5.jpg?f=xl'/>
                <img className="categories-card-box-img-double" src='https://www.ikea.com/us/en/images/products/tufjord-upholstered-bed-frame-gunnared-blue__1150685_pe884655_s5.jpg?f=xl'/>
            </div>
            <div className="categories-border"></div>
        </div>

        <div className='categories-card-container'>
            <div className="categories-card-text">
                <div className="categories-card-text-heading">
                </div>
                <div className="categories-card-text-body">
                </div>
            </div>
            <div className="categories-card-box">
                <img className="categories-card-box-img-single" src='https://www.ikea.com/images/a-light-blue-sofa-with-colorful-cushions-on-top-93909c13e1c93a77f1e069b06e60d73d.jpg?f=xxxl'/>
                {/* <img className="categories-card-box-img" src=''/> */}
            </div>
            <div className="categories-border"></div>
        </div>

        <div>
            <ul className='categories-ul'>
                {alphaCategoryList.map((category, idx) =>{
                    return(
                        <li className='categories-li' key={idx}>
                            <Link to={`/products/category/${category}`}>
                                <img src={CategoryListImgs[category]}  className='categories-img'/>
                                <div className='categories-category'>
                                {category}s
                                </div>                            
                            </Link>
                        </li>
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

export default connect(mapStateToProps)(Categories)
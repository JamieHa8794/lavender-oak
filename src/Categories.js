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
           <ul className='categories-ul'>
                {alphaCategoryList.map((category, idx) =>{
                    return(
                        <li className='categories-li' key={idx}>
                            <Link to={`/products/${category}`}>
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
    )

}

const mapStateToProps = (state) =>{
    return state;
}

// const mapDispatchToProps = () =>{
    
// }

export default connect(mapStateToProps)(Categories)
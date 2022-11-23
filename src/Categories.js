import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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

const itemData = [
    {
        img: 'https://www.ikea.com/us/en/images/products/moerbylanga-table-oak-veneer-brown-stained__1057785_ph177723_s5.jpg?f=xl',
        title: 'Dining Table',
        rows: 3,
        cols: 2,
    },
    {
        img: 'https://www.ikea.com/images/ekedalen-series-ece4eaa4dbbc8ce65ae013451cc0bcfa.jpg?f=l',
        title: 'Dining Table',
      },
    {
        img: 'https://www.ikea.com/us/en/images/products/lisabo-table-ash-veneer__0744784_pe743396_s5.jpg?f=xl',
        title: 'Dining Table',
    },
    {
        img: 'https://www.ikea.com/us/en/images/products/voxloev-dining-table-light-bamboo__0997060_ph176798_s5.jpg?f=xl',
        title: 'Dining Table',
        rows: 2,
        cols: 2,
    },
]


function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
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
        <div className="main-box">

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

            <div className="categories-text-container">
                <div className="categories-text-heading">
                    Shop All Categories
                </div>
            </div>

            <div>
                <ul className='categories-ul'>
                    {alphaCategoryList.map((category, idx) =>{
                        return(
                            <li className='categories-li' key={idx}>
                                <Link className='categories-li-link' to={`/products/category/${category}`}>
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

            <ImageList
            className="categories-imageList"
            sx={{ width: '100%', height: 'auto' }}
            variant="quilted"
            cols={4}
            rowHeight={200}
            >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                    {...srcset(item.img, 200, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
            </ImageList>



        </div>

    )
}

const mapStateToProps = (state) =>{
    return state;
}

// const mapDispatchToProps = () =>{
    
// }

export default connect(mapStateToProps)(Categories)
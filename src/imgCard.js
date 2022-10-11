import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const imgCardImgs = {
    'Bed':'https://www.ikea.com/ext/ingkadam/m/99f043d57898e0/original/PH187961.jpg?f=xxl',
    'Sofa': 'https://www.ikea.com/ext/ingkadam/m/4858e1f60ad3689d/original/PH184559.jpg?f=s', 
    'TV Stand':'https://www.ikea.com/images/a-light-room-with-a-wall-mounted-tv-completely-framed-by-a-c-319c37fdec246b98345fd19445bcd36d.jpg?f=xxl', 
    'Dining Table':'https://www.ikea.com/images/sandsberg-series-2c2e3e99204bb50f6e87b00d72e0ab68.jpg?f=m', 
    'Desk':'https://www.ikea.com/ext/ingkadam/m/1335f20d9821dbea/original/PH188176.jpg?f=xxl', 
    'Rug':'https://www.ikea.com/ext/ingkadam/m/95428ab4c4bb514/original/PH185813-crop002.jpg?f=xxl', 
    'Dining Chair':'https://www.ikea.com/ext/ingkadam/m/3638adfa3721cda3/original/PH185016.jpg?f=xxl', 
    'Computer Chair':'https://www.ikea.com/ext/ingkadam/m/2aeb85a2e9f7e92d/original/PH185914-crop001.jpg?f=xxl', 
    'End Table':'https://www.ikea.com/us/en/images/products/lunnarp-side-table-brown__0836261_pe675473_s5.jpg?f=m', 
    'Night Stand':'https://www.ikea.com/us/en/images/products/eket-storage-combination-with-legs-white-wood__0915075_pe784544_s5.jpg?f=m', 
    'Lamp':'https://www.ikea.com/ext/ingkadam/m/22a17ec2a68d2639/original/PH188198.jpg?f=s',
}


const imgCard = ({products, match}) =>{
    const category = match.params.category;
    const productsByCategory = products.filter(product => product.category === category)
    console.log(imgCardImgs)
    console.log(category)
    console.log(imgCardImgs[category])

    return(
        <div className='imgCard'>
            <img src={imgCardImgs[category]} className='imgCard-img'/>
            <div className='imgCard-textbox'>
                <div className='imgCard-textbox-shop-all-furniture'>
                    Shop All Furniture &#8594;
                </div>
                <div className='imgCard-textbox-description'>
                    Explore what this season has got in store.
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

export default connect(mapStateToProps)(imgCard)
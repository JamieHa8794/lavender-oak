import React from "react";
import { connect } from "react-redux";


const SingleProduct = ({products}) =>{
    //match.params.id *1
    // const id = 1;
    // const product = products.find(product => product.id === id)
    console.log(products)
    return(
        <div className='single-product'>
            
        </div>
    )

}

const mapStateToProps = (state) =>{
    return state;
}

// const mapDispatchToProps = () =>{
    
// }

export default connect(mapStateToProps)(SingleProduct)
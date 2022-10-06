import React from 'react';
import {connect} from 'react-redux'

const Products = ({products}) =>{
    return(
        <div>
            <ul>
                {products.map((product, idx) =>{
                    return(
                        <li key={idx}>
                            {product.name}
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
import React from 'react';
import { connect } from 'react-redux';


const Cart = ({carts})=>{


    const userId = 1;
    const cartItems = carts.filter(cartItem => cartItem.userId === userId);

    if(cartItems.length = 0){
        return(
            <div>
                Cart is empty
            </div>
        )
    }
    return(
        <div>
            <ul>
                {}
            </ul>
        </div>
    )
}




const mapStateToProps = (state) =>{
    return state;
}

// const mapDispatchToProps = () =>{
    
// }


export default connect(mapStateToProps)(Cart)
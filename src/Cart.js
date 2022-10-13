import React from 'react';
import { connect } from 'react-redux';


const Cart = ({carts})=>{


    const userId = '348f74db-3b8e-4a14-808b-b8dc41719db7';
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
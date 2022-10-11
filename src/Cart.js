import React from 'react';
import { connect } from 'react-redux';


const Cart = (props)=>{
    console.log(props)
    return(
        <div>

        </div>
    )
}




const mapStateToProps = (state) =>{
    return state;
}

// const mapDispatchToProps = () =>{
    
// }


export default connect(mapStateToProps)(Cart)
import React from 'react';
import { connect } from 'react-redux';


const Cart = ({carts, products})=>{

    
    const userId = 'e20feb6c-e0d7-4ca2-95c6-27a1a201f527';

    const cartItems = carts.filter(cartItem => cartItem.userId == userId);
    

    const productList = [];
    cartItems.map(cartItem =>{
        products.map(product =>{
            if(cartItem.productId == product.id){
                productList.push(product);
            }
        })
    })

    console.log(productList)

    let sum = 0;

    productList.map(product =>{
        console.log(sum)
        sum = sum + (product.price *1)
    })
    

    if(cartItems.length == 0){
        return(
            <div>
                Cart is empty
            </div>
        )
    }
    return(
        <div>
            <div>
                Items in Cart: 
            </div>
            <ul>
                {productList.map(product =>{
                    return(
                        <li className='cart-items-li'>
                            <img src={product.img} className='cart-items-img'/>
                            <div className='cart-items-product-name'>
                                {product.name}
                            </div>
                            <div>
                                ${product.price}.00
                            </div>
                        </li>
                    )
                })}
            </ul>

            <div>
                <div>
                    Subtotal: {sum ? `$${sum}.00` : 0}
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


export default connect(mapStateToProps)(Cart)
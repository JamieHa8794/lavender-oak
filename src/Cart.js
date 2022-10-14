import React, { Component } from 'react';
import { connect } from 'react-redux';



class Cart extends Component{
    constructor(){
        super();
    }
    render(){
        const {carts, products} = this.props;

        const userId = 'a7afa506-20b1-4de5-8133-2de6616399e5';

        const cartItems = carts.filter(cartItem => cartItem.userId == userId);
        
    
        const productList = [];
        const productCount = {}
        cartItems.map(cartItem =>{
            products.map(product =>{
                if(cartItem.productId == product.id){
                    if(!productCount[product.name]){
                        productCount[product.name] = 0;
                        productList.push(product)
                    }
                    productCount[product.name]++;
                }
            })
        })
    
    
        console.log(productList)
        console.log(productCount)
    
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
        <div className='cart-container'>
            <div>
                <div>
                    Items in Cart: 
                </div>
                <ul>
                    {productList.map((product, idx) =>{
                        return(
                            <li key={idx} className='cart-items-li'>
                                <img src={product.img} className='cart-items-img'/>
                                <div className='cart-items-product-name'>
                                    {product.name}
                                </div>
                                <div>
                                    ${product.price}.00
                                </div>
                                <div>
                                    {productCount[product.name]}
                                </div>
                                <button onClick></button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='cart-summary-container'>
                    <div className='cart-summary-summary'>
                        Summary:
                    </div>
                    <div>
                        Subtotal: {sum ? `$${sum}.00` : 0}
                    </div>
                    <div>
                        Taxes: {sum ? `$${(sum * 0.08875).toFixed(2)}` : 0}
                    </div>
                    <div>
                        Shipping: $49.99
                    </div>
                    <div>
                        Total: {sum ? `$${((sum * 1.08875).toFixed(2)*1)+(49.99*1)}` : 0}
                    </div>
            </div>
        </div>
        )
    }
}



const mapStateToProps = (state) =>{
    return state;
}

// const mapDispatchToProps = () =>{
    
// }


export default connect(mapStateToProps)(Cart)
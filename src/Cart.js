import React, { Component } from 'react';
import { connect } from 'react-redux';



class Cart extends Component{
    constructor(){
        super();
        this.subtract = this.subtract.bind(this);
        this.add = this.add.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    subtract(event){
        console.log(event.target.value)
    }
    add(event){
        console.log(event.target.value)
    }
    removeItem(event){
        console.log(event.target.value)
    }

    render(){
        const {carts, products} = this.props;
        const {subtract, add, removeItem} = this

        const userId = '9efa514d-7448-4f8f-8854-478e2611e68c';

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
                                <div className='cart-items-count-container'>
                                    <button onClick={subtract} value={product.id} className='cart-items-count-subtract'>-</button>
                                    <div className='cart-items-count-count'>
                                        {productCount[product.name]}
                                    </div>
                                    <button onClick={add}  value={product.id} className='cart-items-count-add'>+</button>
                                </div>
                                <button onClick={removeItem} value={product.id}>Remove Item</button>
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
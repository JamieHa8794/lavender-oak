import React, { Component } from 'react';
import { connect } from 'react-redux';
import {removeFromCart} from './store';



class Cart extends Component{
    constructor(){
        super();

        this.subtract = this.subtract.bind(this);
        this.add = this.add.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }
    subtract(event){
        console.log(event.target.value)
        const {carts, history, removeFromCart} = this.props;
        const cartItem = carts.find(item => item.productId === event.target.value)
        console.log('cartItem', cartItem)
        removeFromCart(cartItem, history)
    }
    add(event){
        console.log(event.target.value) 
    }
    removeFromCart(event){
        const {carts, history, removeFromCart} = this.props;
        const cartItem = carts.find(item => item.productId === event.target.value)
        console.log('cartItem', cartItem)
        removeFromCart(cartItem, history)
    }
    render(){
        const {carts, products} = this.props;
        const {subtract, add, removeFromCart} = this

        const userId = '9efa514d-7448-4f8f-8854-478e2611e68c';

        const cartItems = carts.filter(cartItem => cartItem.userId == userId);
        
        if(carts.length === 0 || products.length === 0 ){
            return(
                <div>
                    Cart is empty
                </div>
            )
        }
        
        // const productList = [];
        // // const productCount = {};
        // cartItems.map(cartItem =>{
        //     products.map(product =>{
        //         if(cartItem.productId == product.id){
        //             // if(!productCount[product.name]){
        //                 // productCount[product.name] = 0;
        //                 productList.push(product)
        //             // }
        //             // productCount[product.name]++;
        //         }
        //     })
        // })
    

        const productList = {};
        // const productCount = {};
        cartItems.map(cartItem =>{
            products.map(product =>{
                if(cartItem.productId == product.id){
                    // if(!productCount[product.name]){
                        // productCount[product.name] = 0;
                        productList[product.id] = product;
                    // }
                    // productCount[product.name]++;
                }
            })
        })

        console.log(this.props)
        let sum = 0;
    

        cartItems.map(cartItem =>{
            const product = products.find(product => product.id === cartItem.productId)
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
                    {cartItems.map((cartItem, idx) =>{
                        return(
                            <li key={idx} className='cart-items-li'>
                                <img src={productList[cartItem.productId].img} className='cart-items-img'/>
                                <div className='cart-items-product-name'>
                                    {productList[cartItem.productId].name}
                                </div>
                                <div>
                                    ${productList[cartItem.productId].price}.00
                                </div>
                                <div className='cart-items-count-container'>
                                    <button onClick={subtract} value={productList[cartItem.productId].id} className='cart-items-count-subtract'>-</button>
                                    <div className='cart-items-count-count'>
                                        {/* {productCount[product.name]} */}
                                        {cartItem.count}
                                    </div>
                                    <button onClick={add}  value={productList[cartItem.productId].id} className='cart-items-count-add'>+</button>
                                </div>
                                <button onClick={removeFromCart} value={productList[cartItem.productId].id}>Remove Item</button>
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

const mapDispatchToProps = (dispatch) =>{
    return{
        removeFromCart: (cartItem, history) =>{
            console.log('here')
            console.log(cartItem)
            dispatch(removeFromCart(cartItem, history))
        }
    }   
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)




// {productList.map((product, idx) =>{
//     return(
//         <li key={idx} className='cart-items-li'>
//             <img src={product.img} className='cart-items-img'/>
//             <div className='cart-items-product-name'>
//                 {product.name}
//             </div>
//             <div>
//                 ${product.price}.00
//             </div>
//             <div className='cart-items-count-container'>
//                 <button onClick={subtract} value={product.id} className='cart-items-count-subtract'>-</button>
//                 <div className='cart-items-count-count'>
//                     {/* {productCount[product.name]} */}
//                     {product.count}
//                 </div>
//                 <button onClick={add}  value={product.id} className='cart-items-count-add'>+</button>
//             </div>
//             <button onClick={removeFromCart} value={product.id}>Remove Item</button>
//         </li>
//     )
// })}
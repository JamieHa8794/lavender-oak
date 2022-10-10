import React from 'react';


const imgCard = () =>{
    return(
        <div className='imgCard'>
            <img src='https://www.ikea.com/ext/ingkadam/m/2a821bb007b488d7/original/PH168785-crop001.jpg?f=s' className='imgCard-img'/>
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

export default imgCard;
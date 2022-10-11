import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {faker} from '@faker-js/faker'


const MoreInfo = () =>{
    return(
        <div className="moreinfo-container">
            <div className="moreinfo-product-description-container">
                <div className="moreinfo-product-description">
                    Product Description
                </div>
                <div className="moreinfo-product-description-description">
                    {faker.lorem.paragraphs(2)}
                </div>
            </div>
            <div className="moreinfo-how-to-care-container">
                <div className="moreinfo-how-to-care">
                    How to Care
                </div>
                <div className="moreinfo-how-to-care-description">
                    {faker.lorem.paragraphs(2)}
                </div>
            </div>
            <div className="moreinfo-reviews-container">
                <div className="moreinfo-reviews">
                    Reviews
                </div>
                <div className="moreinfo-reviews-description">
                    {faker.lorem.paragraphs(2)}
                </div>
            </div>
        </div>
    )
}




export default connect()(MoreInfo)
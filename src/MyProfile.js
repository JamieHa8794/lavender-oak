import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const MyProfile = ({users, auth}) =>{
    if(!users){
        return(
        <div>
            Whoops.. no users here
        </div>)
    }
    const id = auth.id

    const user = users.find(user => user.id === id)


    if(!user){
        return(
        <div>
            Whoops.. no users here
        </div>)
    }
    return(
        <div className="myProfile-container">
            <Link to='/myProfile/editInfo'>Edit Personal Info</Link>
            <img src={user.img} className='myProfile-img'/>
            <div className="myProfile-info-container">
                <div className="myProfile-info-firstName">
                    {user.firstName}
                </div>
                <div className="myProfile-info-middleName">
                    {user.middleName}
                </div>
                <div className="myProfile-info-lastName">
                    {user.lastName}
                </div>
                <div className="myProfile-info-phoneNumber">
                    {user.phoneNumber}
                </div>
                <div className="myProfile-info-address-container">
                    <div className="myProfile-info-address-streetAddress">
                        {user.streetAddress}
                    </div>
                    <div className="myProfile-info-address-city">
                        {user.city}
                    </div>
                    <div className="myProfile-info-address-zipCode">
                        {user.zipCode}
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return state;
}




export default connect(mapStateToProps)(MyProfile)
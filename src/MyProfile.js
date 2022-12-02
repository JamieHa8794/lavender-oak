import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


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
        <div className="main-box">
            <Paper elevation={3} >

                <div className="myProfile-container">
                
                    <div className="myProfile-header">My Profile</div>
                    <Link className='myProfile-edit-link' to='/myProfile/editInfo'>Edit Personal Info</Link>
                    <div className="myProfile-personal-detail-container">
                        <div className="myProfile-personal-detail-header">
                            Personal Details
                        </div>
                        <Divider/>
                        <div className="myProfile-personal-detail-container-sub">
                            <TextField
                                className="myProfile-info"
                                id="first-name-read-only-input"
                                label="First Name"
                                defaultValue={user.firstName}
                                InputProps={{
                                    readOnly: true,
                                }}
                                sx={{margin: 1}}

                                variant="filled"                            
                            />
                            <TextField
                                className="myProfile-info"
                                id="middle-name-read-only-input"
                                label="Middle Name"
                                defaultValue={user.middleName}
                                InputProps={{
                                    readOnly: true,
                                }}
                                sx={{margin: 1}}
                                variant="filled"                            
                            />
                            <TextField
                                className="myProfile-info"
                                id="last-name-read-only-input"
                                label="Last Name"
                                defaultValue={user.lastName}
                                InputProps={{
                                    readOnly: true,
                                }}
                                sx={{margin: 1}}
                                variant="filled"                            
                            />
                        </div>
                    </div>
                    <div className="myProfile-contact-info-container">
                        <div className="myProfile-contact-info-header">
                            Contact Info
                            </div>
                        <Divider/>
                        <div className="myProfile-contact-info-container-sub">

                        <TextField
                                className="myProfile-info"
                                id="phoneNumber-read-only-input"
                                label="Phone Number"
                                defaultValue={user.phoneNumber}
                                InputProps={{
                                    readOnly: true,
                                }}
                                sx={{margin: 1}}
                                variant="filled"                            
                            />
                            <TextField
                                className="myProfile-info"
                                id="streetAddress-read-only-input"
                                label="Street Address"
                                defaultValue={user.streetAddress}
                                InputProps={{
                                    readOnly: true,
                                }}
                                sx={{margin: 1}}
                                variant="filled"                            
                            />
                            <TextField
                                className="myProfile-info"
                                id="city-read-only-input"
                                label="City"
                                defaultValue={user.city}
                                InputProps={{
                                    readOnly: true,
                                }}
                                sx={{margin: 1}}
                                variant="filled"                            
                            />
                            <TextField
                                className="myProfile-info"
                                id="zipcode-read-only-input"
                                label="Zipcode"
                                defaultValue={user.zipCode}
                                InputProps={{
                                    readOnly: true,
                                }}
                                sx={{margin: 1}}
                                variant="filled"                            
                            />
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return state;
}




export default connect(mapStateToProps)(MyProfile)
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


import {updateUserInfo} from './store';

import Button from '@mui/material/Button';

import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class EditProfile extends Component{
    constructor(props){
        super(props);

        const {auth} = this.props.state;
        this.state = {
            firstName: auth ? auth.firstName : '',
            middleName: auth ? auth.middleName : '',
            lastName: auth ? auth.lastName : '',
            phoneNumber: auth ? auth.phoneNumber : '',
            email: auth ? auth.email: '',
            streetAddress: auth ? auth.streetAddress : '',
            city: auth ? auth.city : '',
            // state: auth ? auth.state : '',
            zipCode: auth ? auth.zipCode : ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.goBack = this.goBack.bind(this)

    }
    onChange(event) {
        const change = {}
        change[event.target.name] = event.target.value
        this.setState(change)
    }
    onSubmit(event){
        event.preventDefault();
        const {firstName, middleName, lastName, phoneNumber, email, streetAddress, city, zipCode} = this.state;
        const {history, updateUserInfo} = this.props;

        updateUserInfo(history, firstName, middleName, lastName, phoneNumber, email, streetAddress, city, zipCode)


    }
    goBack(){
        const {history} = this.props;
        history.push('/myProfile');
    }
    componentDidUpdate(prevProps){
        const {firstName, middleName, lastName, phoneNumber, email, streetAddress, city, zipCode} = this.props.state.auth

        if(prevProps !== this.props){
            this.setState({
                firstName, middleName, lastName, phoneNumber, email, streetAddress, city, zipCode
            })
        }

    }
    render(){
        const {firstName, middleName, lastName, phoneNumber, email, streetAddress, city, zipCode} = this.state
        const {onChange, onSubmit, goBack} = this
        return(
            <div>
            <div className="main-box">
            <Paper elevation={3} >
                <div className="myProfile-container">
                    <div className="myProfile-header">Edit My Profile</div>
                    <div className="myProfile-detail-container">
                        <div className="myProfile-info-header">
                            Personal Details
                        </div>
                        <Divider/>
                        <div className="myProfile-info-container-sub">
                            <TextField
                                className="myProfile-info"
                                id="first-name-read-only-input"
                                label="First Name"
                                name='firstName'
                                value={firstName ? firstName : ''}
                                onChange={onChange}
                                sx={{margin: 1}}

                                variant="filled"                            
                            />
                            <TextField
                                className="myProfile-info"
                                id="middle-name-read-only-input"
                                label="Middle Name"
                                name='middleName'
                                value={middleName ? middleName : ''} 
                                onChange={onChange}
                                sx={{margin: 1}}
                                variant="filled"                            
                            />
                            <TextField
                                className="myProfile-info"
                                id="last-name-read-only-input"
                                label="Last Name"
                                name='lastName'
                                value={lastName ? lastName : ''} 
                                onChange={onChange}
                                sx={{margin: 1}}
                                variant="filled"                            
                            />
                        </div>
                    </div>
                    <div className="myProfile-detail-container">
                        <div className="myProfile-info-header">
                            Contact Info
                            </div>
                        <Divider/>
                        <div className="myProfile-info-container-sub">

                        <TextField
                                className="myProfile-info"
                                id="phoneNumber-read-only-input"
                                label="Phone Number"
                                name='phoneNumber'
                                value={phoneNumber ? phoneNumber : ''} 
                                onChange={onChange}
                                sx={{margin: 1}}
                                variant="filled"                            
                            />
                            <TextField
                                className="myProfile-info"
                                id="streetAddress-read-only-input"
                                label="Email"
                                name='email'
                                value={email ? email : ''} 
                                onChange={onChange}
                                sx={{margin: 1}}
                                variant="filled"                            
                            />
                        </div>
                    </div>
                    <div className="myProfile-detail-container">
                        <div className="myProfile-info-header">
                            Address
                            </div>
                        <Divider/>
                        <div className="myProfile-info-container-sub">
                            <TextField
                                className="myProfile-info"
                                id="streetAddress-read-only-input"
                                label="Street Address"
                                name='streetAddress'
                                value={streetAddress ? streetAddress : ''} 
                                onChange={onChange}
                                sx={{margin: 1}}
                                variant="filled"                            
                            />
                            <TextField
                                className="myProfile-info"
                                id="city-read-only-input"
                                label="City"
                                name='city'
                                value={city ? city : ''} 
                                onChange={onChange}
                                sx={{margin: 1}}
                                variant="filled"                            
                            />
                            <TextField
                                className="myProfile-info"
                                id="zipcode-read-only-input"
                                label="Zipcode"
                                name='zipCode'
                                value={zipCode ? zipCode : ''} 
                                onChange={onChange}
                                sx={{margin: 1}}
                                variant="filled"                            
                            />
                        </div>
                    </div>
                    <Button 
                    onClick={onSubmit} variant="contained"
                    sx={{
                        backgroundColor: '#b299e5',
                        '&:hover': {
                            backgroundColor: '#9370DB',
                            boxShadow: 'none',
                        },
                        marginTop: '10px',
                        marginBottom: '10px',

                    }}> Save </Button>
                    <Button
                    onClick={goBack}
                    sx={{
                        color: '#b299e5',
                        '&:hover': {
                            backgroundColor: '#9370DB',
                            color: 'white',
                            boxShadow: 'none',
                        },
                        marginTop: '10px',
                        marginBottom: '10px',

                    }}>
                        Cancel
                    </Button>
                </div>
            </Paper>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        updateUserInfo : (history, firstName, middleName, lastName, phoneNumber, email, streetAddress, city, zipCode) =>{
            dispatch(updateUserInfo(history, firstName, middleName, lastName, phoneNumber, email, streetAddress, city, zipCode))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
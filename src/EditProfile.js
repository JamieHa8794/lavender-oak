import React, {Component} from 'react';
import { connect } from 'react-redux';

import {updateUserInfo} from './store';

class EditProfile extends Component{
    constructor(props){
        super(props);

        const {auth} = this.props.state;
        console.log(this.props.state)
        this.state = {
            firstName: auth ? auth.firstName : '',
            middleName: auth ? auth.middleName : '',
            lastName: auth ? auth.lastName : '',
            phoneNumber: auth ? auth.phoneNumber : '',
            streetAddress: auth ? auth.streetAddress : '',
            city: auth ? auth.city : '',
            // state: auth ? auth.state : '',
            zipCode: auth ? auth.zipCode : ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
    onChange(event) {
        const change = {}
        change[event.target.name] = event.target.value
        this.setState(change)
        console.log(this.state)
    }
    onSubmit(event){
        event.preventDefault();
        const {firstName, middleName, lastName, phoneNumber, streetAddress, city, zipCode} = this.state;
        const {history} = this.props;


        updateUserInfo(history, firstName, middleName, lastName, phoneNumber, streetAddress, city, zipCode)


    }
    componentDidUpdate(prevProps){
        const {firstName, middleName, lastName, phoneNumber, streetAddress, city, zipCode} = this.props.state.auth
        if(prevProps !== this.props){
            this.setState({
                firstName, 
                middleName, 
                lastName, 
                phoneNumber, 
                streetAddress, 
                city, 
                zipCode
            })
        }

    }
    render(){
        const {firstName, middleName, lastName, phoneNumber, streetAddress, city, state, zipCode} = this.state
        const {onChange, onSubmit} = this
        return(
            <div>
                <form>
                    <input name='firstName' value={firstName ? firstName : ''}  onChange={onChange}></input>
                    <input name='middleName' value={middleName ? middleName : ''} onChange={onChange}></input>
                    <input name='lastName' value={lastName ? lastName : ''} onChange={onChange}></input>
                    <input name='phoneNumber' value={phoneNumber ? phoneNumber : ''} onChange={onChange}></input>
                    <input name='streetAddress' value={streetAddress ? streetAddress : ''} onChange={onChange}></input>
                    <input name='city' value={city ? city : ''} onChange={onChange}></input>
                    {/* <input value={state}></input> */}
                    <input name='zipCode' value={zipCode ? zipCode : ''} onChange={onChange}></input>
                    <button onClick={onSubmit}> Save </button>
                </form>
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
        updateUserInfo : (dispatch) =>{
            dispatch(updateUserInfo(history, firstName, middleName, lastName, phoneNumber, streetAddress, city, zipCode))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
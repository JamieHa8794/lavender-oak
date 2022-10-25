import React, {Component} from 'react';
import { connect } from 'react-redux';

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
    }
    onChange () {

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
        const {onChange} = this
        return(
            <div>
                <form>
                    <input value={firstName ? firstName : ''}  onChange={onChange}></input>
                    <input value={middleName ? middleName : ''} onChange={onChange}></input>
                    <input value={lastName ? lastName : ''} onChange={onChange}></input>
                    <input value={phoneNumber ? phoneNumber : ''} onChange={onChange}></input>
                    <input value={streetAddress ? streetAddress : ''} onChange={onChange}></input>
                    <input value={city ? city : ''} onChange={onChange}></input>
                    {/* <input value={state}></input> */}
                    <input value={zipCode ? zipCode : ''} onChange={onChange}></input>
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
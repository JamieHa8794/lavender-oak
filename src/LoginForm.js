import React, {Component} from 'react';
import { connect } from 'react-redux';

class LoginForm extends Component{
    constructor(){
        super();
        this.state={
            username: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(event){
        const change = this.state;
        change[event.target.name] = event.target.value
        console.log(change)
        this.setState(change)
    }
    onSubmit(event){
        event.preventDefault();

        const state = this.state
        console.log(state)
    }
    render(){
        const {onSubmit, onChange} = this
        return(
            <div className='login-container'>
                <form className='login-form'>
                    <label>Username:</label>
                    <input name='username' onChange={onChange}></input>
                    <label>Password:</label>
                    <input name='password' onChange={onChange}></input>
                    <button onClick={onSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

// export default LoginForm;

const mapStateToProps = (state) => {
    return{
        state
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        login: (credentials) =>{
            dispatch(longin(credentials))
        }
    }
}




export default connect()(LoginForm)
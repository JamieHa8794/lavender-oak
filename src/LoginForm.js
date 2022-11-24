import React, {Component} from 'react';
import { connect } from 'react-redux';

import {login} from './store'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';

class LoginForm extends Component{
    constructor(){
        super();
        this.state={
            username: '',
            password: '',
            showPassword: false
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this)
        this.toCreateAccount = this.toCreateAccount.bind(this)
    }
    onChange(event){
        const change = this.state;
        change[event.target.name] = event.target.value
        this.setState(change)
    }
    onSubmit(event){
        event.preventDefault();

        const {login, history} = this.props;
        const credentials = this.state
        login(credentials, history)
    }
    handleClickShowPassword(){
        const {showPassword} = this.state
        this.setState({showPassword: !showPassword})
        
    }
    handleMouseDownPassword(event){
        event.preventDefault();
    }
    toCreateAccount(event){
        event.preventDefault();

        const {history} = this.props;
        history.push('/createAccount');
    }

    render(){
        const {onSubmit, onChange, handleClickShowPassword, handleMouseDownPassword, toCreateAccount} = this
        return(
            <div className="main-box">
                <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: 1,
                    height: 1,
                    },
                }}
                >
                    <Paper className='login-container' elevation={9} >
                        {/* <div className='login-container'> */}
                        <form className='login-form'>

                            <FormControl variant="standard">
                                <InputLabel htmlFor="input-with-icon-adornment">
                                Username
                                </InputLabel>
                                <Input
                                name='username' onChange={onChange}

                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                    <AccountCircle />
                                    </InputAdornment>
                                }
                                />
                            </FormControl>


                            <FormControl variant="standard">
                                <InputLabel htmlFor="input-with-icon-adornment">
                                Password
                                </InputLabel>
                                <Input
                                name='password' onChange={onChange}

                                id="outlined-adornment-password"

                                type={this.state.showPassword ? 'text' : 'password'}

                                value={this.state.password}
                                
                                startAdornment={
                                    <InputAdornment position="start">
                                    <LockIcon />
                                    </InputAdornment>
                                }
                                
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                                />
                            </FormControl>
                            {/* <button className='login-button' onClick={onSubmit}>Log In</button>
                            <button className='login-button' onClick={toCreateAccount}>Create an Account</button> */}



                            <Button variant="contained"
                            sx={{
                                backgroundColor: '#a09b4eec',
                                '&:hover': {
                                    backgroundColor: '#737839',
                                    boxShadow: 'none',
                                },
                                marginTop: '10px'

                            }}
                            onClick={onSubmit}>Log In</Button>

                            <Button variant="contained"
                            sx={{
                                backgroundColor: '#a09b4eec',
                                '&:hover': {
                                    backgroundColor: '#737839',
                                    boxShadow: 'none',
                                },
                                marginTop: '10px'

                            }}
                            onClick={toCreateAccount}>Create an Account</Button>

                        </form>



                        








                        <img className='login-img' src='https://www.ikea.com/ext/ingkadam/m/582f3e4de2e87569/original/PH185949-crop001.jpg?f=xxxl'/>
                        {/* </div> */}
                    </Paper>
                </Box>

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
        login: (credentials, history) =>{
            dispatch(login(credentials, history))
        },
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
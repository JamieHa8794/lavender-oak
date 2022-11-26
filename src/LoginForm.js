import React, {Component} from 'react';
import { connect } from 'react-redux';

import {login} from './store'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


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

                            <Button variant="contained"
                            sx={{
                                backgroundColor: '#b299e5',
                                '&:hover': {
                                    backgroundColor: '#9370DB',
                                    boxShadow: 'none',
                                },
                                marginTop: '10px',
                                marginBottom: '10px',

                            }}
                            onClick={onSubmit}>Sign In
                            </Button>

                            <Divider>OR</Divider>


                            <Button variant="contained"
                            sx={{
                                backgroundColor: '#b299e5',
                                '&:hover': {
                                    backgroundColor: '#9370DB',
                                    boxShadow: 'none',
                                },
                                marginTop: '10px',
                                marginBottom: '10px',

                            }}
                            onClick={toCreateAccount}>Create an Account
                            </Button>

                        </form>

                        <img className='login-img' src='https://www.ikea.com/ext/ingkadam/m/1216e28c8d27f812/original/PH175972-crop001.jpg?f=xl'/>
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
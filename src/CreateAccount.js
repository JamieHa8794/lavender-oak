import React, {Component} from 'react';
import { connect } from 'react-redux';

import {createUser} from './store'

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
import EmailIcon from '@mui/icons-material/Email';
import Divider from '@mui/material/Divider';

class createAccount extends Component{
    constructor(){
        super();
        this.state={
            username: '',
            password: '',
            confirmPassword: '',
            email:'',
            showPassword: false
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this)
        this.toSignIn = this.toSignIn.bind(this)
    }
    onChange(event){
        const change = this.state;
        change[event.target.name] = event.target.value
        this.setState(change)
    }
    onSubmit(event){
        event.preventDefault();

        const {createUser, history} = this.props;
        const {username, password, email, confirmPassword} = this.state
        if(password === confirmPassword){
            createUser(username, password, email, history)
        }
        else{
            window.alert('passwords do not match')
        }
    }
    handleClickShowPassword(){
        const {showPassword} = this.state
        this.setState({showPassword: !showPassword})
        
    }
    handleMouseDownPassword(event){
        event.preventDefault();
    }
    toSignIn(event){
        event.preventDefault();

        const {history} = this.props;
        history.push('/login');
    }

    render(){
        const {onSubmit, onChange, handleClickShowPassword, handleMouseDownPassword, toSignIn} = this
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

                        <img className='login-img' src='https://www.ikea.com/ext/ingkadam/m/18d994795b501bec/original/PH173608-crop001.jpg?f=xxxl'/>

                        <form className='login-form'>

                            <FormControl variant="standard">
                                <InputLabel htmlFor="input-with-icon-adornment">
                                Email
                                </InputLabel>
                                <Input
                                name='email' onChange={onChange}

                                id="input-with-icon-adornment-email"
                                startAdornment={
                                    <InputAdornment position="start">
                                    <EmailIcon />
                                    </InputAdornment>
                                }
                                />
                            </FormControl>

                            <FormControl variant="standard">
                                <InputLabel htmlFor="input-with-icon-adornment-username">
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
                            <FormControl variant="standard">
                                <InputLabel htmlFor="input-with-icon-adornment">
                                Confirm Password
                                </InputLabel>
                                <Input
                                name='confirmPassword' onChange={onChange}

                                id="outlined-adornment-confirmPassword"

                                type={this.state.showPassword ? 'text' : 'password'}

                                value={this.state.confirmPassword}
                                
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
                                label="Confirm Password"
                                />
                            </FormControl>


                            <Button variant="contained"
                            sx={{
                                backgroundColor: '#a09b4eec',
                                '&:hover': {
                                    backgroundColor: '#737839',
                                    boxShadow: 'none',
                                },
                                marginTop: '10px',
                                marginBottom: '10px',

                            }}
                            onClick={onSubmit}>Create an Account
                            </Button>

                            <Divider>OR</Divider>

                            <Button variant="contained"
                            sx={{
                                backgroundColor: '#a09b4eec',
                                '&:hover': {
                                    backgroundColor: '#737839',
                                    boxShadow: 'none',
                                },
                                marginTop: '10px',
                                marginBottom: '10px',

                            }}
                            onClick={toSignIn}>Sign In</Button>

                        </form>

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
        createUser: (username, password, email, history) =>{
            dispatch(createUser(username, password, email, history))
        },
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(createAccount)
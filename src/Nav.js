import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {logout} from './store'


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import YardIcon from '@mui/icons-material/Yard';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Divider from '@mui/material/Divider';


const pages = ['Products', 'Categories'];
const settings = ['Profile', 'Logout'];

class Nav extends Component{
    constructor(){
        super();
        this.state = {
            anchorElNav: null,
            anchorElUser: null
        }
        this.onClick = this.onClick.bind(this)
        this.handleOpenNavMenu = this.handleOpenNavMenu.bind(this)
        this.handleCloseNavMenu = this.handleCloseNavMenu.bind(this)
        this.handleOpenUserMenu = this.handleOpenUserMenu.bind(this)
        this.handleCloseUserMenu = this.handleCloseUserMenu.bind(this)
    }
    onClick(){
        const {history, logout} = this.props;

        logout(history);
    }

    handleOpenNavMenu(event){
        this.setState({
            anchorElNav: event.currentTarget
        })
        // setAnchorElNav(event.currentTarget);
    };
    handleOpenUserMenu(event){
        this.setState({
            anchorElUser: event.currentTarget
        })
        // setAnchorElUser(event.currentTarget);
    };
    
    handleCloseNavMenu(){
        this.setState({
            anchorElNav: null
        })
        // setAnchorElNav(null);
      };
    
    handleCloseUserMenu(){
        this.setState({
            anchorElUser: null
        })
        // setAnchorElUser(null);
    };

    render(){
        const {auth, users} = this.props.state;
        const {onClick} = this
        
        const {handleOpenNavMenu, handleCloseNavMenu, handleOpenUserMenu, handleCloseUserMenu} = this
        const {anchorElNav, anchorElUser} = this.state

        const user = users.find(user => user.id === auth.id);
        

        if(Object.keys(auth).length === 0){

        return(
            <AppBar position="static"
                sx={{
                    backgroundColor: 'white',
                    color: '#9370DB'
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                    <YardIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '2rem' }} />

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 600,
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        Lavander Oak
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {pages.map((page) => (
                            <Link  className='app-bar-link' to={`/${page}`} key={page}>
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center" color='black'>{page}</Typography>
                            </MenuItem>
                            </Link>
                        ))}
                        </Menu>

                    </Box>
                   
                   
                    <YardIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, fontSize: '2rem' }} />
                    
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 600,
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        Lavander Oak
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                        <Link  className='app-bar-link' to={`/${page}`} key={page} >
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                {page}
                            </Button>
                        </Link>

                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display:'flex', flexDirection: 'row'}}>
                        <Link className='app-bar-link' to='/login'>
                            <Button
                                sx={{ my: 2, color: 'black', display: 'block', fontSize: '10px' }}
                                >
                                Log In
                            </Button>
                        </Link>

                        <Divider orientation="vertical" variant="middle" flexItem />

                        <Link className='app-bar-link' to='/createAccount'>
                            <Button
                                sx={{ my: 2, color: 'black', display: 'block', fontSize: '10px' }}
                                >
                                Create an Account
                            </Button>
                        </Link>
                    </Box>

                    <Link to='/cart'>
                        <ShoppingCartOutlinedIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1, fontSize: '2rem', color: '#9370DB'}}/>
                    </Link>
                    </Toolbar>
                </Container>
                </AppBar>            
        )
        }

        //IF USER IS LOGGED IN 
        return(
        <AppBar position="static"
        sx={{
            backgroundColor: 'white',
            color: '#9370DB'
        }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <YardIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '2rem' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 600,
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                    Lavander Oak
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {pages.map((page) => (
                            <Link  className='app-bar-link' to={`/${page}`} key={page}>
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" color='black'>{page}</Typography>
                                </MenuItem>
                            </Link>
                        ))}
                        </Menu>
                    </Box>
            
            
                    <YardIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, fontSize: '2rem' }} />
                
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 600,
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        Lavander Oak
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                        <Link  className='app-bar-link' to={`/${page}`} key={page}>

                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            {page}
                        </Button>
                        </Link>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar src="/static/images/avatar/2.jpg" />
                        </IconButton>
                        </Tooltip>
                        <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        >
                        {/* {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))} */}
                            <Link className='app-bar-link' to='/myProfile'>
                                <MenuItem  onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" color='black'>My Profile</Typography>
                                </MenuItem>
                            </Link>
                                <MenuItem onClick={()=>{
                                    onClick();
                                    handleCloseUserMenu();
                                }}>
                                    <Typography textAlign="center" color='black'>Log Out</Typography>
                                </MenuItem>
                        </Menu>
                    </Box>
                    <Link to='/cart'>
                    <ShoppingCartOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '2rem', color: '#9370DB'}}/>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>   

        )

    }
}



const mapStateToProps = (state) =>{
    return {
        state
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        logout: (history) =>{
            dispatch(logout(history));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () =>{
    return(
        <nav>
            <img src='./public/logo.png' className='nav-logo'/>

            <Link to='/'>Home</Link>
            <Link to='/Products'>Products</Link>
            <Link to='/Categories'>Categories</Link>
            <Link to='/MyProfile'>My Profile</Link>

        </nav>
    )
}

export default Nav;
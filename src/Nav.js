import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () =>{
    return(
        <nav>
            <div className='nav-logo'>Lavander Oak</div>
            
            <Link to='/'>Home</Link>
            <Link to='/Products'>Products</Link>
            <Link to='/Users'>Users</Link>

        </nav>
    )
}

export default Nav;
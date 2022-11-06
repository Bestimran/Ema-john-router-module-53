import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const {user, LogOut} = useContext(AuthContext);
    
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ?
                    <Link to='/login'><button className='logout' onClick={LogOut}>LogOut</button></Link>
                    :
                    <>
                    <Link to="/login">Login</Link>
                    <Link to="/signUp">SignUp</Link>
                    </>}
                

                {/* <span>{user?.email}</span> */}
            </div>
           
        </nav>
    );
};

export default Header;
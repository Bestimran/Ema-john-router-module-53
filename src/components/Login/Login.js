import React from 'react';
import { useContext } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Login.css';

const Login = () => {
    const {signIn}= useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleLogin =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from,{replace:true});
        })
        .catch(error =>console.error(error));
        form.reset();
        
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='Enter your Email'required />
                </div>
                <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder='Password'required />
                </div>
                <input className='btn-login' type="submit" value="Login" />
            </form>
            <p className='amazon'><small><Link to='/signUp'>new to Amazon</Link></small></p>
           
        </div>
    );
};

export default Login;
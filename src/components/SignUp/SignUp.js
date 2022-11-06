import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './SignUp.css';

const SignUp = () => {
    const {createUser}=useContext(AuthContext);
    const [error, setError] = useState();
    const handleSubmit = (event) =>{  
        event.preventDefault();
        const form = event.target;
        const email= form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(email, password, confirm);
        if(password.length < 8){
            setError('password should be 8 character');
            return;
        }
        if(password !== confirm){
            setError('Your password did not match');
            return;
        }
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));

        
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='Enter your Email'required />
                </div>
                <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder='Password'required />
                </div>
                <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" placeholder='Confirm password'required />
                </div>
                
                <input className='btn-login' type="submit" value="SignUp" />
            </form>
            <p className='amazon'><small><Link to='/login'>Already have an account?</Link></small></p>
            <p className='error-setup'>{error}</p>
           
        </div>
    );
};

export default SignUp;
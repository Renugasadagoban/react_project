import React, { useState, useEffect } from 'react';
import './Login-Form.css';
import { useNavigate } from 'react-router-dom';
import { LoginValidation } from '../../utils/query';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<LoginValidation>({ email: '', password: '', isLoggedIn: false });

    const navigate = useNavigate();
    const validate = () => {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrors({ email: '', password: '', isLoggedIn: false });
        if (email.length <= 0) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(email)) {
            errors.email = 'Invalid email address';
        }

        if (password.length <= 0) {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        setErrors(errors);
        if (errors.email.length <= 0 && errors.password.length <= 0) {
            return true;
        }
        else {
            return false;
        }
    };

    useEffect(() => {
        localStorage.removeItem('login');
    }, []);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (validate()) {
            const parsedData = JSON.parse(localStorage.getItem('userData') ?? '[]');
            const emailFound = parsedData.some((user: LoginValidation) => user.email === email);
            localStorage.setItem('login', JSON.stringify({ 'email': email, 'password': password, 'isLoggedIn': true }));
            if (emailFound != null && emailFound) {
                navigate('/home',);
            }
            else {
                navigate('/');
            }

        }
    };

    return (
        <div className="login-form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} autoComplete='off' noValidate>
                <div className='username'>
                    <label>Email:</label>
                    <input
                        type="email"
                        className='input'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className='errorText'>{errors.email}</span>}
                </div>
                <div className='password'>
                    <label>Password:</label>
                    <input
                        type="password" className='input'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <span className='errorText'>{errors.password}</span>}
                </div>
                <button type="submit" className='form-submit'>Submit</button>
            </form>
        </div>
    );
};

export default LoginForm;

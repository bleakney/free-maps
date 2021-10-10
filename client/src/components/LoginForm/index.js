import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const LoginForm = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    // update state when user fills out form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState, 
            [name]: value });
    };

    // submit form handler
    const loginFormHandler = async (e) => {
        e.preventDefault();

        try {
            const { data } = await login({
                variables: {...formState}
            });
            Auth.login(data.login.token);
        } catch (error) {
            console.error(error);
        }

        setFormState({
            username: '',
            email: '',
            password: ''
        });
    };

    return (
        <div className="loginForm-container">
            <form onSubmit={loginFormHandler}>
                <input 
                className="form-input"
                placeholder="username@email.com"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleInputChange}
                />
                <input
                className="form-input"
                placeholder="password"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleInputChange}
                />
                <button className="login-btn" type="submit">submit</button>
            </form>
            {error && <div>login failed</div>}
        </div>
    )
}

export default LoginForm;
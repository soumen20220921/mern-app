// PasswordReset.js
import React, { useState } from 'react';
import './ResetPassword.css';
import { auth } from './Firebase';
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const PasswordReset = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log('Password reset requested for:', email);

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Check your email for the password reset link.");
                navigate("/login");
            })
            .catch((err) => {
                setErrorMessage(err.message);
            });
    };

    return (
        <div className="password-reset-container">
            <h2>Password Reset</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <button className="buttonfg" type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default PasswordReset;

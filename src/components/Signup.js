import React, { useEffect, useState, useRef } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { login, register } from './services/AuthService';
import styles from '../styles/LoginSignup.module.css';
function Signup() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [signIn, setSignIn] = useState(false);
    const [toHomepage, setToHomepage] = useState(false);
    const [message, setMessage] = useState(null);
    const { pathname } = useLocation();
    const counter = useRef(0);
    console.log("path1", pathname);

    if (toHomepage === true) {
        <Redirect to="/discover/popular" />
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log("inhere1", formData);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await register(formData);
        console.log(res);
        if (res.message.msgError) {
            setMessage(res.message.msgBody);
        }
        if (res.message.msgError === false) {
            setMessage(res.message.msgBody);
        }

    }




    return (
        <div>
            <h1>Sign Up</h1>
            {/* <form action="" method="POST"> */}
            <form onSubmit={handleSubmit} >
                <label for="username">Username</label>
                <input name="username" placeholder="username" type="text" onChange={handleChange} />
                <label for="password">Password</label>
                <input name="password" type="password" onChange={handleChange} />

                {/* {pathname === '/signup' ? <button onClick={handleSubmit}>Sign Up</button>
                    : <button onClick={handleSubmit}>Log in</button>
                } */}
                <button onClick={handleSubmit}>Sign Up</button>
                {message ? <div className={styles.message}>{message}</div> : null}

            </form>
        </div>
    )
}

export default Signup

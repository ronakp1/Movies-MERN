import React, { useEffect, useState, useRef, useContext } from 'react';
import { useLocation, Redirect, useHistory } from 'react-router-dom';
import { isAuth, login, register } from './services/AuthService';
import styles from '../styles/LoginSignup.module.css';
import { AuthContext } from './services/AuthContext';

function Login() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [signIn, setSignIn] = useState(false);
    const [toHomepage, setToHomepage] = useState(false);
    const [message, setMessage] = useState(null);
    const { pathname } = useLocation();
    const counter = useRef(0);
    const authContext = useContext(AuthContext);
    console.log("path1", pathname);
   let history = useHistory();

    useEffect(() => {
        <Redirect to="/discover/popular" />
    }, [toHomepage])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log("inhere1", formData);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await login(formData);
        console.log(res);

        const { isAuthenticated, username } = res

        if (isAuthenticated) {
            authContext.setUser(username);
            authContext.setIsAuthenticated(isAuthenticated);
            setToHomepage(true);
            setMessage("Succesfully logged in");
            console.log("authenticated");
            history.push('/');
        }
        else {
            console.log("not authenticated");
            setMessage("Incorrect username or password");
        }
        // if (res.message.msgError) {
        //     setMessage(res.message.msgBody);
        // }
        // if (res.message.msgError === false) {
        //     setMessage(res.message.msgBody);
        // }

    }




    return (
        <div>
            <h1>LOG IN</h1>
            {/* <form action="" method="POST"> */}
            <form onSubmit={handleSubmit} >
                <label for="username">Username</label>
                <input name="username" placeholder="username" type="text" onChange={handleChange} />
                <label for="password">Password</label>
                <input name="password" type="password" onChange={handleChange} />

                {/* {pathname === '/signup' ? <button onClick={handleSubmit}>Sign Up</button>
                    : <button onClick={handleSubmit}>Log in</button>
                } */}
                <button onClick={handleSubmit}>Login</button>
                {message ? <div className={styles.message}>{message}</div> : null}

            </form>
        </div>
    )
}

export default Login

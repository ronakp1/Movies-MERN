import React, { useEffect, useState, useRef } from 'react';
import { useLocation, Redirect } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [signIn, setSignIn] = useState(false);
    const [toHomepage, setToHomepage] = useState(false);
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

    const handleSubmit = (e) => {
        console.log("inhere2", formData);
        setSignIn(true);

    }
    useEffect(() => {
        const { username, password } = formData;
        const data = {
            username,
            password
        }

        const hey = async () => {
            if (counter.current < 1) {
                // if (username.length > 0) {
                console.log("inhere3", data);


                const res = await fetch(pathname === '/signup' ? '/api/signup' : '/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })

                const dataArrived = await res.json();
                counter.current++;
                console.log("dataar", dataArrived);
                if (dataArrived.errors) {
                    console.log("dataar", dataArrived.errors)
                    // <div>
                    //     <h1>{dataArrived.errors.username}</h1>
                    //     <h1>{dataArrived.errors.password}</h1>
                    // </div>
                }
                if (dataArrived.user) {
                    // counter.current = 0;
                    console.log("user is signed in");
                    setToHomepage(true);
                }
            }
            // }
        }

        hey();

    }, [signIn === true]);
    return (
        <div>
            <h1>Sign Up</h1>
            <form action="" method="POST">
                <label for="username">Username</label>
                <input name="username" placeholder="username" type="text" onChange={handleChange} />
                <label for="password">Password</label>
                <input name="password" type="password" onChange={handleChange} />

                {pathname === '/signup' ? <button onClick={handleSubmit}>Sign Up</button>
                    : <button onClick={handleSubmit}>Log in</button>
                }



            </form>
        </div>
    )
}

export default Login

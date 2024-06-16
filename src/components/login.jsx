import React, { useState } from "react";
import "@styles/AuthStyle.css"

export default function Login() {
    const {username, setUsername} = useState('');
    const {password, setPassword} = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://127.0.0.1:5000/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username, 
                "password": password
            })
        });
        console.log(username, password)
        console.log(response)
        const data = await response.json();

        if (response.ok){
            alert('Login Exitoso');
        }
        else{
            alert('Credenciales incorrectas: '+ data.message);

        }
    }
    return (
        <section className="h-full w-full login wrap">
            <h1 className="txt-title">Login</h1>
            <form id="loginForm" onSubmit={handleSubmit}>
                <input placeholder="Username" 
                        id="username" 
                        name="username" 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                />
                <input placeholder="Password" 
                        id="password" 
                        name="password" 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />

                <input value="Login" className="btn" type="submit" />
            </form>
        </section>
    );
}
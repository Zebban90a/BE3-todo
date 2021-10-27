import React from 'react'

import { Link } from 'react-router-dom'



export default function Login() {
  

    return (
        <div>
            <form action="http://localhost:4000/users/login" method="POST">
                <input
                placeholder='username'
                name='username'
                
                >
                </input>
                <input
                placeholder='password'
                name='password'
                
                ></input>
                <button type="submit">Logga in</button>
            </form>
            <h2>Skapa konto!</h2>
            <Link to="/register"><button>Skapa konto</button></Link>
        </div>
    ) 

}

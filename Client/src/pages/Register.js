import React from 'react'

export default function Register() {
    return (
        <div>
            <form action="http://localhost:4000/users/register" method="POST">
                <input
                placeholder='username'
                name='username'
                
                >
                </input>
                <input
                placeholder='password'
                name='password'
                
                ></input>
                <button type="submit">Skapa</button>
            </form>
        </div>
    )
}

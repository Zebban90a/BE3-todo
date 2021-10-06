import React, {useState} from 'react'

import axios from 'axios'


export default function Login() {
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let submitHandler = (e) => {

        console.log({password: password, username: userName})
        axios.post(`http://localhost:4000/users/login`, {username : userName, password: password})
        
        
      }
    
    let changeHandler = (e) => {
        if(e.target.name === 'username') {
            setUsername(e.target.value)
        } else if (e.target.name === 'password')  
            setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                placeholder='username'
                name='username'
                onChange={changeHandler}
                >
                </input>
                <input
                placeholder='password'
                name='password'
                onChange={changeHandler}
                ></input>
                <button type="submit">Logga in</button>
            </form>
        </div>
    )
}

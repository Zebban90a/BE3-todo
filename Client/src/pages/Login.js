import React, {useState} from 'react'

import axios from 'axios'


export default function Login() {
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let submitHandler = (e) => {
        console.log(`This is the text ${console.log({password})}`)
        axios.post(`http://localhost:4000/users/login`, {username: 'Sebbanebättre', password: '1234'})
        
        
      }
    
    let changeHandler = (e) => {
        if(e.target.name === userName) {
            setUsername(e.target.value)
            console.log(setUsername)
        } else if(e.target.name === password) {
            setPassword(e.target.value)
        } 
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

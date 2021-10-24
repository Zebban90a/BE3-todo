import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function PostForm({ listId }) {
  const [text, setText] = useState('');
  const textfield = useRef();

  // if(textfield.value  === '' ? console.log('tom sträng') : console.log('ej tom sträng'));
  const submitHandler = () => {
    axios.post(`http://localhost:4000/todo/${listId}`, text);
    console.log(`This is the text ${text}`);
  };

  const changeHandler = (e) => {
    setText({ text: e.target.value });
  //  const todoBody = e.target.value;
  };

  return (
    <>
      <h1>Lägg till en todo</h1>
      <div>
        <form onSubmit={submitHandler} action="">
          <input
            ref={textfield}
            name="text"
            type="text"
            placeholder="Ny todo"
            onChange={changeHandler}
          />
          <br />
          <button type="submit">Spara</button>
        </form>
      </div>
    </>
  );
}

// TODO fetcha todon till servern

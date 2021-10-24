import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function UpdateTodo() {
  const [todo, setTodo] = useState('');
  const { todoId, listId } = useParams();

  async function FetchTodo() {
    const { data } = await axios.get(
      `http://localhost:4000/todolist/${listId}/todo/${todoId}`,
    );
    setTodo(data);
  }

  const submitHandler = () => {
    axios.post(`http://localhost:4000/todolist/${listId}/todo/${todoId}`, todo);
    console.log(`This is the text ${todo}`);
  };

  const changeHandler = (e) => {
    setTodo({ text: e.target.value });
  };

  useEffect(() => {
    FetchTodo();
  }, []);

  return (
    <>
      <h1>Redigera todo</h1>
      <form onSubmit={submitHandler} action="">
        <input
          name="text"
          type="text"
          placeholder="Ny todo"
          value={todo.body}
          onChange={changeHandler}
        />
        <br />
        <button type="submit">Spara</button>
      </form>
    </>
  );
}

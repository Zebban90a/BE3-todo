import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import CreateTodo from '../components/CreateTodo';

export default function ListPage() {
  const [list, setTodoList] = useState([]);
  const { listId } = useParams();

  async function FetchList() {
    const { data } = await axios.get(`http://localhost:4000/todolist/${listId}`);
    setTodoList(data);
  }

  useEffect(() => {
    FetchList();
  }, []);

  /// ///////////////////// Delete function ////////////////////////

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:4000/todolist/${listId}/todo/${id}`);
    window.location.reload();
  };

  return (
    <>
      <div>{!list ? 'List not found' : list.titel}</div>

      <ul>
        {!list.todos
          ? 'todos not found'
          : list.todos.map((item) => (
            <li key={item._id}>
              {item.body}
              {' '}
              {item.updatedAt}
              {' '}
              <button type="button" onClick={() => deleteTodo(item._id)}>DELETE</button>
              <Link to={`/todolist/${listId}/todo/${item._id}`}>
                <button type="button">UPDATE</button>
              </Link>
            </li>
          ))}
      </ul>
      <CreateTodo listId={listId} />
    </>
  );
}

// TODO när fetchningen fungerar igen så fixa post req i CreateTodo.js

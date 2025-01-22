import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './todo.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editingId, setEditingId] = useState(null); // Armazena o ID do item que está sendo editado
    const [editingText, setEditingText] = useState(''); // Armazena o texto do item que está sendo editado

    useEffect(() => {
        console.log('Resultado Get:', todos);
    }, [todos]);


    useEffect(() => {
        axios.get('http://localhost:5000/api/todos')
            .then((response) => setTodos(response.data))
            .catch((error) => console.error(error));
    }, []);


    const addTodo = () => {
        if (!newTodo) return;
        axios.post('http://localhost:5000/api/todos', { title: newTodo })
            .then((response) => setTodos([...todos, response.data]))
            .catch((error) => console.error(error));
        setNewTodo('');
    };


    const toggleTodo = (id, completed) => {
        axios.put(`http://localhost:5000/api/todos/${id}`, { completed: !completed })
            .then((response) => {
                setTodos(todos.map(todo => todo._id === id ? response.data : todo));
            })
            .catch((error) => console.error(error));
    };


    const deleteTodo = (id) => {
        axios.delete(`http://localhost:5000/api/todos/${id}`)
            .then(() => setTodos(todos.filter(todo => todo._id !== id)))
            .catch((error) => console.error(error));
    };


    const startEditing = (id, title) => {
        setEditingId(id);
        setEditingText(title);
    };


    const saveEdit = (id) => {
        axios.put(`http://localhost:5000/api/todos/${id}`, { title: editingText })
            .then((response) => {
                setTodos(todos.map(todo => todo._id === id ? response.data : todo));
                setEditingId(null);
                setEditingText('');
            })
            .catch((error) => console.error(error));
    };


    const cancelEdit = () => {
        setEditingId(null);
        setEditingText('');
    };

    return (
        <div>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo._id} className='ListItem'>
                        {editingId === todo._id ? (
                            <>
                            <div className='ButtonList'>
                                <input
                                    type="text"
                                    value={editingText}
                                    onChange={(e) => setEditingText(e.target.value)}
                                />
                                <button onClick={() => saveEdit(todo._id)}>Save</button>
                                <button onClick={cancelEdit}>Cancel</button>
                                </div>
                            </>
                        ) : (
                            <><div className='ButtonList'>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(todo._id, todo.completed)}
                                />
                                
                                {todo.title}
                                <button onClick={() => startEditing(todo._id, todo.title)}>Edit</button>
                                <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

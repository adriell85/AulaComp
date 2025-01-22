import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './todo.css'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(()=>{
        console.log('Resultado Get:',todos)
        return console.log('obtidos!!')
    },[todos])


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         console.log('Executando continuamente...');
    //     }, 1000); // Repete a cada 1 segundo
    
    //     return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    // }, []);


    // useEffect(() => {
    //     console.log('Executando após cada renderização');
    // });

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
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo._id, todo.completed)}
                        />
                        {todo.title}
                        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

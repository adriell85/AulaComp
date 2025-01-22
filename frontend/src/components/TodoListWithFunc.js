import React, { Component } from 'react';
import axios from 'axios';
import './todo.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: ''
        };
    }

    refreshPage() {
        window.location.reload(false);
      }

    // Fetch todos from the API
    componentDidMount() {
        axios.get('http://localhost:5000/api/todos')
            .then((response) => {
                this.setState({ todos: response.data });
            })
            .catch((error) => console.error(error));
    }

    // Add a new todo
    addTodo = () => {
        const { newTodo, todos } = this.state;
        if (!newTodo) return;

        axios.post('http://localhost:5000/api/todos', { title: newTodo })
            .then((response) => {
                this.setState({
                    todos: [...todos, response.data],
                    newTodo: ''
                });
            })
            .catch((error) => console.error(error));
    };

    // Toggle completed status
    toggleTodo = (id, completed) => {
        axios.put(`http://localhost:5000/api/todos/${id}`, { completed: !completed })
            .then((response) => {
                const updatedTodos = this.state.todos.map(todo =>
                    todo._id === id ? response.data : todo
                );
                this.setState({ todos: updatedTodos });
            })
            .catch((error) => console.error(error));
    };

    // Delete a todo
    deleteTodo = (id) => {
        axios.delete(`http://localhost:5000/api/todos/${id}`)
            .then((response) => {
                const filteredTodos = this.state.todos.filter(todo => todo._id !== id);
                this.setState({ todos: filteredTodos });
            })
            .catch((error) => console.error(error));
    };

    // Handle input change
    handleInputChange = (event) => {
        this.setState({ newTodo: event.target.value });
    };

    render() {
        const { todos, newTodo } = this.state;

        return (
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={this.handleInputChange}
                    placeholder="Add a new todo"
                />
                <button onClick={this.addTodo}>Add</button>
                <ul>
                    {todos.map(todo => (
                        <li key={todo._id} className='ListItem'>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => this.toggleTodo(todo._id, todo.completed)}
                            />
                            {todo.title}
                            <button onClick={() => this.deleteTodo(todo._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoList;

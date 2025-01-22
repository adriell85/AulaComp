import React from 'react';
import TodoList from '../components/TodoListWithHooks';
import './TodoPage.css'
import { useNavigate } from 'react-router-dom';



const TodoPage = () => {
    const navigate = useNavigate();
    return (
        <div className='divComp'>
            <button onClick={()=> navigate('/')}>Back to Menu</button>
        <div className="TodoPage">
            <h1>Minha Todo List</h1>
            <TodoList/>
        </div>
        </div>
    );
};

export default TodoPage;

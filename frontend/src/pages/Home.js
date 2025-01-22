import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <h1>Bem-vindo à aplicação Todo List!</h1>
            <button onClick={() => navigate('/todo')}>Ir para Todo List</button>
        </div>
    );
};

export default Home;

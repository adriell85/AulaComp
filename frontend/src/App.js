import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TodoPage from './pages/TodoPage';
import './App.css'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<TodoPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

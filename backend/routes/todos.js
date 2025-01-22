const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Mongoose Schema
const TodoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
});

const Todo = mongoose.model('Todo', TodoSchema);

// Create
router.post('/', async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        completed: false,
    });
    await todo.save();
    res.status(201).json(todo);
});

// Read all
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// Update
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(id, { title, completed }, { new: true });
    res.json(updatedTodo);
});

// Delete
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(204).send();
});

module.exports = router;

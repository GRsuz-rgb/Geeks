import express from 'express';

const app = express();
app.use(express.json());

let todos = [];
let nextId = 1;

//Create a new todo: POST /api/todos
app.post('/api/todos', (req, res) => {
    const { title } = req.body;
    if (!title)
        return res.status(400).json({ error : 'Title is required'});
    
    const todo = { id: nextId++, title, completed: false };
    todos.push(todo);
    res.status(201).json(todo);
});

//Get all todos: GET /api/todos
app.get('/api/todos', (req, res) => {
    res.status(200).json(todos);
});

//Get a specific todo: GET /api/todos/:id
app.get('/api/todos/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(to => to.id === id);
    if (!todo) 
        return res.status(404).json({ error: 'Todo not found' });

    res.status(200).json(todo);
});

//Update a todo: PUT /api/todos/:id
app.put('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(to => to.id === id);
    if (!todo) 
        return res.status(404).json({ error: 'Todo not found' });

    const { title, completed } = req.body;
    todo.title = title;
    todo.completed = completed;

    res.status(200).json(todo);
});

//Delete a todo: DELETE /api/todos/:id
app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(to => to.id !== id);

    res.json({ message: 'Todo deleted successfully' });
});

//running server
app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});
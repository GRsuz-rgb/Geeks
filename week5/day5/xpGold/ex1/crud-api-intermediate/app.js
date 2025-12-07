import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

const url = 'https://jsonplaceholder.typicode.com/posts';

//Read All Posts: GET /api/posts
app.get('/api/posts', async (req, res) => { 
    try {
        const response = await axios.get(url);
        console.log("data successfully retrieved");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch posts" });
    }
});
//Read Single Post: GET /api/posts/:id
app.get('/api/posts/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`${url}/${id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch the post" });
    }
});
//Create Post: POST /api/posts
app.post('/api/posts', async (req, res) => {
    try {
        const response = await axios.post(url, req.body);
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).json({error: "Failed to create the post"});
    }
});
//Update Post: PUT /api/posts/:id
app.put('/api/posts/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.put(`${url}/${id}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to update the post" });
    }
});
//Delete Post: DELETE /api/posts/:id
app.delete('/api/posts/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.delete(`${url}/${id}`);
        res.json({ message: "Post deleted successfully", data : response.data});
    } catch (error) {
        res.status(500).json({ error: "Failed to delete the post" });
    }
});

//running server
app.listen(5000, () => {
    console.log('Server is running on port http://localhost:5000');
})
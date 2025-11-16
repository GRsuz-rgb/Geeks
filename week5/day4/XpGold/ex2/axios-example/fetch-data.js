const axios = require('axios');

async function fetchPosts() {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        res.data.forEach(post => console.log(post.title));
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = fetchPosts;
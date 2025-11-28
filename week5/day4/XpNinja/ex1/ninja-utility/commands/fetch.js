import axios from 'axios';
export default async function fetchData() {
    try {
        const request = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log("fetched data : \n", request.data);
    }
    catch(err) {
        console.error("Error fetching data : ", err);
    }
}

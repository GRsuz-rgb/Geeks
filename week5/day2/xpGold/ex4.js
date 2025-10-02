//Exercise 4 : Modify fetch with Async/Await

const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typicode.com/albums"
      ];

const getData = async function() {
    try {
        const [users, posts, albums] = await Promise.all(
            urls.map(async (url) => {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network error");
                }
                return response.json();
            })
        );

        console.log('users', users);
        console.log('posta', posts);
        console.log('albums', albums);
    }
    catch (error) {
        console.log("ooooooops", error);
    }
};


getData();




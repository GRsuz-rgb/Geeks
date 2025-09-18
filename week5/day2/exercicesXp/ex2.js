//Exercise 2 : Giphy API

//fetch 10 gifs about "sun" starting from position 2 => use query params : q=sun ->search term , limit=10 ->number of gifs, offset=2 ->starting index

const sunUrl = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"

fetch(sunUrl)
   .then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
   })
   .then(data => {
    console.log("Sun gifs data:", data);
   })
   .catch(error => {
    console.error("Error fetching Sun gifs:", error);
   });














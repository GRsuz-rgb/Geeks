//Exercise 1 : Giphy API

const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(url) 
  .then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })

  .then(data => {
    console.log("Giphy data : ", data);
  })
  .catch(error => {
    console.error("Error fetching Giphy API:", error);
  });


//==>log the whole JSON object returned from Giphy




































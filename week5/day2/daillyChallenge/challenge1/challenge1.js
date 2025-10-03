const form = document.getElementById("form");
const userInput = document.getElementById("user-input");
const gifResults = document.getElementById("gifResults");
const deleteAllBtn = document.getElementById("delete-all");

const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

form.addEventListener("submit", async (event) => {
  event.preventDefault(); 

  const searchTerm = userInput.value.trim();
  if (!searchTerm) {
    alert("Please enter a category!");
    return;
  }

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?tag=${searchTerm}&api_key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Extract gif url
    const gifUrl = data.data.images.original.url;

    // Create gif container
    const gifContainer = document.createElement("div");
    gifContainer.classList.add("gif-container");

    // Add gif image
    const img = document.createElement("img");
    img.src = gifUrl;
    img.alt = searchTerm;

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      gifContainer.remove();
    });

    // Append everything
    gifContainer.appendChild(img);
    gifContainer.appendChild(deleteBtn);
    gifResults.appendChild(gifContainer);

  } catch (err) {
    console.log("Error fetching GIF:", err);
    alert("Something went wrong.");
  }
});

// Delete all
deleteAllBtn.addEventListener("click", () => {
  gifResults.innerHTML = "";
});

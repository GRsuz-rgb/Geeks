//2. 3.
const allBooks = [
    {
        title : "1984", 
        author : "George Orwell",
        image: "https://couverture.numilog.com/9789897785795_w300.jpg",
        alreadyRead: false
    },
    
    {
        title : "The Mysterious Affair at Styles", 
        author : "Agatha Christie",
        image: "https://www.gutenberg.org/cache/epub/863/pg863.cover.medium.jpg",
        alreadyRead: true
    },
];

//4.1...
const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.style.border = "1px solid #ccc";
    bookDiv.style.pading = "10px";
    bookDiv.style.margin = "10px 0";
    bookDiv.style.display = "flex";
    bookDiv.style.alignItems = "center";
    bookDiv.style.gap = "10px";

     
    const details = document.createElement("p");
    details.textContent = `${book.title} written by ${book.author}`;

    if (book.alreadyRead) {
        details.style.color = "red";
    }

    const image = document.createElement("img");
    image.src = book.image;
    image.style.width = "100px";

    bookDiv.appendChild(image);
    bookDiv.appendChild(details);
    
    section.appendChild(bookDiv);
});






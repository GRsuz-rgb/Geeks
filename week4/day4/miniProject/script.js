//array of objects (quotes)
const objects = [
    {id: 0, author: "Saadallah Wannous", quote: "We are doomed by hope, and come what may, today cannot be the end of history.", likes: 0},
    {id: 1, author: "Naguib Mahfouz", quote: "Fear doesn't prevent death. It prevents life.", likes: 0},
    {id: 2, author: "Amal Dunqul", quote: "Do not reconcile blood with blood! Do not reconcile! Even if it is said, “an eye for an eye“, are all eyes equal? Would you turn a stranger into your brother?...", likes: 0}
];

let lastId = -1;
let current = null; //current quote

const quoteBox = document.getElementById("quote-box");
const generateBtn = document.getElementById("generate-btn");
const addQuoteForm= document.getElementById("add-quote");
const charWithSpaceBtn = document.getElementById("with-space");
const charNoSpaceBtn = document.getElementById("without-space");
const wordCountBtn = document.getElementById("word-count");
const likeBtn = document.getElementById("Like-btn");
const filterForm = document.getElementById("filter-form");
const filterResults = document.getElementById("filter-results");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");

let filterQuotes = [];
let filterIndex = 0;

//display quote
const displayQuote = (quote) => {
    current = quote;
    quoteBox.innerHTML = `<p>Quote : ${quote.quote}</p>
                        <p>Author : ${quote.author}</p>
                        <p>Likes : ${quote.likes}</p>`;
};


//Random generator
const generateQuote = () => {
    let randomIndex;
    while(randomIndex === lastId) {
        randomIndex = Math.floor(Math.random() * objects.length);
    }
    
    lastId = randomIndex;
    displayQuote(objects[randomIndex]);
};


//Add quote
addQuoteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = document.getElementById("quote").value.trim();
    const author = document.getElementById("author").value.trim();

    if (text && author) {
        const newQuote = {
            id : objects.length,
            author,
            quote : text,
            likes : 0
        };
        objects.push(newQuote);
        alert("Quote added !");
        addQuoteForm.reset();
    }
});

//Buttons
charWithSpaceBtn.addEventListener("click", () => {
    if (current) alert(`Characters (with spaces): ${current.quote.length}`);
});

charNoSpaceBtn.addEventListener("click", () => {
    if (current) alert(`Characters (without spaces): ${current.quote.replace(/\s+/g, "").length}`);
});

wordCountBtn.addEventListener("click", () => {
    if (current) alert(`Words: ${current.quote.split(/\s+/g).length}`);
});

likeBtn.addEventListener("click", () => {
    if (current) {
        current.likes++;
        displayQuote(current);
    }
});

//Filter qutes by author

const displayFilterQuote = () => {
  const quote = filterQuotes[filterIndex];
  filterResults.innerHTML = `
    <p>Quote : ${quote.quote}</p>
    <p>Author : ${quote.author}</p>
    <p>Likes : ${quote.likes}</p>
  `;
};


filterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const author = document.getElementById("author-filter").value.trim();

    filterQuotes = objects.filter(qu => qu.author.toLowerCase() === author.toLowerCase());
    filterIndex = 0;

    if (filterQuotes.length > 0) {
        displayFilterQuote();
        previousBtn.style.display = "inline-block";
        nextBtn.style.display = "inline-block";
    }
    else {
        filterResults.innerHTML = `<p>No quotes found for ${author}</p>`;
        previousBtn.style.display = "none";
        nextBtn.style.display = "none";
    }
});

previousBtn.addEventListener("click", () => {
    if (filterIndex > 0) {
        filterIndex--;
        displayFilterQuote();
    }
});

nextBtn.addEventListener("click", () => {
    if (filterIndex < filterQuotes.length - 1) {
        filterIndex++;
        displayFilterQuote();
    }
});


generateBtn.addEventListener("click", generateQuote);
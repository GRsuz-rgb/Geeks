
let theColor = "black";
let isDrawing = false;
let Alwan = document.querySelectorAll(".colorBtn");

Alwan.forEach(colorBtn => {
    colorBtn.addEventListener("click", function(){
        theColor = colorBtn.style.backgroundColor;
    });
});
//create grid
for(let i = 0; i < 1274; i++){ //1274 = le nbr de cases
    let square = document.createElement("div");
    square.classList.add("square");
    document.querySelector(".grid").appendChild(square);

}
//Drawing
document.querySelector(".grid").addEventListener("mousedown", function(){
   isDrawing = true;
});

document.querySelector(".grid").addEventListener("mouseup", function(){
   isDrawing = false;
});
    
document.querySelector(".grid").addEventListener("mouseover", e => {
  if (isDrawing && e.target.classList.contains("square")) {
    e.target.style.background = theColor;
  }
});
    //simple click
document.querySelector(".grid").addEventListener("click", e => {
  if (e.target.classList.contains("square")) {
    e.target.style.background = theColor;
  }
});


//clear
let clear = document.getElementById("clear");
clear.addEventListener("click", function(){
    document.querySelectorAll(".square").forEach(c => {
        c.style.background = "white";
    });
});



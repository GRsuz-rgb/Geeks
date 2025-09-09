
//create grid
for(let i = 0; i < 2000; i++){ //50lignes*40colonnes=2000
    let square = document.createElement("div");
    square.classList.add("square");
    document.querySelector(".grid").appendChild(square);

}

//Drawing
document.querySelector(".grid").addEventListener("mousedown", function(){
    let isMouseDown = true;
})







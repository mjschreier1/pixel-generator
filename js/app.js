var selectedColor = "red";
document.querySelector("#clear").addEventListener("click", clearPalette);
createCanvas();

function createCanvas() {
    createRows();
    populateWithDivs();
    createPalette();
    highlightSelectedColor()
};

function createRows() {
    for(let i = 0; i < 40; i++) {
        let newSection = document.createElement("section");
        newSection.id = `row ${i}`;
        document.querySelector("#canvas").appendChild(newSection)
    }
}

function populateWithDivs() {
    document.querySelectorAll("section").forEach(section => {
        for(let i = 0; i < 60; i++) {
            let newDiv = document.createElement("div");
            newDiv.id = `row ${section.id} column ${i}`;
            newDiv.addEventListener("click", colorSquare);
            newDiv.addEventListener("mouseover", colorSquare);
            newDiv.addEventListener("dragover", colorSquare)
            section.appendChild(newDiv)
        }
    })
}

function createPalette() {
    document.querySelectorAll(".color").forEach(div => {
        div.style.backgroundColor = div.id;
        div.addEventListener("click", changeSelectedColor);
    })
}

function highlightSelectedColor() {
    document.querySelectorAll(".color").forEach(color => {
        color.style.borderWidth = ".5px";
        if(color.id === selectedColor) {
            color.style.borderWidth = "5px";
        }
    })
}

function changeSelectedColor(event) {
    selectedColor = event.target.id;
    highlightSelectedColor()
}

function colorSquare(event) {
    if(event.type === "mouseover" && event.buttons === 0) return;
    event.target.style.backgroundColor = selectedColor
}

function clearPalette() {
    if(confirm("Are you sure you want to clear the canvas?")) {
        document.querySelector("#canvas").innerHTML = "";
        createCanvas()
    }
}
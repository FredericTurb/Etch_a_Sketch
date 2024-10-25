createDiv();
listenMouse();

function createDiv()
{
    const myDiv = document.getElementById("maindiv");
    myDiv.style.display = "grid";
    myDiv.style.gridTemplateColumns = "repeat(16, 1fr)";
    myDiv.style.gridTemplateRows = "repeat(16, 1fr)";
    myDiv.style.gap = "2px";

    for (let i = 0; i < 256; i++){
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("new")
        myDiv.appendChild(contentDiv);}
}

// CREATE EVENT LISTENER MOUSEOVER/MOUSEOUT...




function listenMouse()
{
    const myDiv = document.getElementById("maindiv");
    contentDiv.addEventListener("mouseover",() => {
        contentDiv.style.backgroundColor = 'lightcoral';
})}
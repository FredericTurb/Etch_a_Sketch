createDiv();


const constReset = document.getElementById("reset");
constReset.addEventListener("click", myDelete);

function myDelete()
{
    const toDelete = document.getElementById("maindiv");
    while (toDelete.firstChild)
    {
        toDelete.firstChild.remove();
    }
    createDiv();
}

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
        myDiv.appendChild(contentDiv);
        contentDiv.addEventListener("mouseover",() => {
            contentDiv.style.backgroundColor = 'black';
        })
    }
}

let userChoice = 16;

createDiv();


const constReset = document.getElementById("reset");
constReset.addEventListener("click", myDelete);

const constSize = document.getElementById("select");
constSize.addEventListener("click", howMany);

function myDelete(userChoice)
{   
    const toDelete = document.getElementById("maindiv");
    while (toDelete.firstChild)
    {
        toDelete.firstChild.remove();
    }
    createDiv(userChoice);}

function createDiv(){
    const myDiv = document.getElementById("maindiv");
    myDiv.style.display = "grid";
    myDiv.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`;
    myDiv.style.gridTemplateRows = `repeat(${userChoice}, 1fr)`;
    myDiv.style.gap = "2px";

    for (let i = 0; i < userChoice * userChoice; i++){
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("new")
        myDiv.appendChild(contentDiv);
        contentDiv.addEventListener("mouseover",() => {
            contentDiv.style.backgroundColor = 'black';
        })
    }}

function howMany(){
    regex = /^\d*$/;
    userChoice = prompt("How many rows would you like ? (Max 90, Defaut 16)");
    if (userChoice > 90 || userChoice === null || userChoice === "" || !regex.test(userChoice))
    {
        howMany();
    }
    else{
    myDelete(userChoice);}}

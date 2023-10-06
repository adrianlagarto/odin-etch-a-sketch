let color = "black";

document.addEventListener("DOMContentLoaded", function(){
  createBoard(16);

  let btnPopUp = document.querySelector('#pop-up')
  btnPopUp.addEventListener("click", function(){
    let size = getSizeBoard();
    createBoard(size);
  })
})

function createBoard(size){
  let board = document.querySelector(".board");

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
  let numDivs = size * size;

  for(let i = 0; i < numDivs; i++){
    let div = document.createElement("div")
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend", div)
  }
}

function getSizeBoard() {
  let input = prompt("Change the size of the board:(100 limit)")
  let message = document.querySelector('#message');

  if(input === "") {
    return message.innerHTML = 'Please provide a number';
  }
  if (input < 0 || input > 100){
    return message.innerHTML = 'Provide a number between 1 and 100'
  }
  else{
    message.innerHTML = "Now you play!"
    return input;
  }
}

function colorDiv(){
  if(color === "random"){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
  else{
    this.style.backgroundColor = 'black';
  }
}

function setColor(colorChoice){
  color = colorChoice;
}
function resetButton(){
  let divs = document.querySelectorAll("div");
  divs.forEach((div) => div.style.backgroundColor = "white")
}

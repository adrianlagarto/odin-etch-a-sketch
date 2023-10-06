 document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    let btnPopUp = document.querySelector('#pop-up')
    btnPopUp.addEventListener("click", function(){
      let size = getSizeBoard();
      createBoard(size);
    })
    
    console.log("hi");
 })


function createBoard(size){
  let board = document.querySelector(".board");

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
  let numDivs = size * size;

  for(let i = 0; i < numDivs; i++){
    let div= document.createElement("div")
    
    board.insertAdjacentElement("beforeend", div)
  }
}

function getSizeBoard() {
  let input = prompt("Change the size of the board:(100 limit)")
  let message = document.querySelector('#message');
  console.log('hi')

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
//function resetButton(){}

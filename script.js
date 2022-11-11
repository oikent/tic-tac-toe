const cells = document.querySelectorAll(".cell")
const board = document.querySelector('.board')

const cellsArray = Array.from(cells)

const winningArray = [
    [cellsArray[0],cellsArray[1],cellsArray[2]],
    [cellsArray[3],cellsArray[4],cellsArray[5]],
    [cellsArray[6],cellsArray[7],cellsArray[8]],
    [cellsArray[0],cellsArray[3],cellsArray[6]],
    [cellsArray[1],cellsArray[4],cellsArray[7]],
    [cellsArray[2],cellsArray[5],cellsArray[8]],
    [cellsArray[0],cellsArray[4],cellsArray[8]],
    [cellsArray[2],cellsArray[4],cellsArray[6]]
]
console.log(winningArray[0])

for(win of winningArray){
    // console.log(win[0])
    
    for(winner of win){
        // console.log(winner)
    }
    
}


let currentPlayer = 'x'

board.classList.add(currentPlayer)

cells.forEach((cell)=>{
    cell.addEventListener('click',()=>{
        if(currentPlayer === 'x' && !cell.classList.contains('x') && !cell.classList.contains('o') ){
            board.classList.remove(currentPlayer)
            currentPlayer = 'o'
            board.classList.add(currentPlayer)
            cell.classList.add('x')
            
            
            
        }
        else if(currentPlayer === 'o' && !cell.classList.contains('x') && !cell.classList.contains('o') ) {
            board.classList.remove(currentPlayer)
            currentPlayer = 'x'
            board.classList.add(currentPlayer)
            cell.classList.add('o')
            
        }   

})})




// Start game with board as x
// if x clicks cell and cell is empty mark cell as x
// switch board to o
// o clicks cell withought class x or o mark cell as o
// switch statment to check if there are 3 of the same in a row column or diagonal player wins
// if not draw
// display winner screen
// on button restart clear all classes restart game



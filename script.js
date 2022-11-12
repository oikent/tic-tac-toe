const cells = document.querySelectorAll(".cell")
const board = document.querySelector('.board')
const winningScreen = document.querySelector('.winning-screen')
const restartButton = document.querySelector('.restart')
const winner = document.querySelector('.winner')

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

let currentPlayer = 'x'
let winningPlayer = ''
function checkWinner(){
    for(win of winningArray){
        if(win[0].classList.contains('x') && win[1].classList.contains('x') && win[2].classList.contains('x')){
            winner.textContent = 'X WINS'
            displayWinner()
        }
        else if(win[0].classList.contains('o') && win[1].classList.contains('o') && win[2].classList.contains('o')){
            winner.textContent =  'CIRCLE WINS'
            displayWinner()
        }
        
    }
    
}
function displayWinner(){
    winningScreen.style.visibility = 'visible'
    
}

function restart(){
        winningScreen.style.visibility = 'hidden'
        for (c of cellsArray){
            c.classList.remove('x')
            c.classList.remove('o')
        }
    }





restartButton.addEventListener('click',() =>{
    restart()
})

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
        for(c of cellsArray){
            if(c.classList === 'cells x' || c.classList === 'cells o' ){
                console.log('draw')
            }
            console.log(c.classList)
        }
        
    
        checkWinner()
})})




// Start game with board as x
// if x clicks cell and cell is empty mark cell as x
// switch board to o
// o clicks cell withought class x or o mark cell as o
// switch statment to check if there are 3 of the same in a row column or diagonal player wins
// if not draw
// display winner screen
// on button restart clear all classes restart game



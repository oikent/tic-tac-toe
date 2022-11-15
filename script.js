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

const drawArray = []

let currentPlayer = 'x'

function checkWinner(){
    for(win of winningArray){
        if(win[0].classList.contains('x') && win[1].classList.contains('x') && win[2].classList.contains('x')){
            winner.textContent = 'X WINS'
            winningScreen.style.visibility = 'visible'
        }
        else if(win[0].classList.contains('o') && win[1].classList.contains('o') && win[2].classList.contains('o')){
            winner.textContent =  'CIRCLE WINS'
            winningScreen.style.visibility = 'visible'
        }
        
    }
    
}

function restart(){
        drawArray.length = 0
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
        if(cell.classList.value === 'cell x' || cell.classList.value === 'cell o' ){
                drawArray.push(cell.classList.value)
        }
        
        if(drawArray.length === 9){
            winner.textContent = 'DRAW'
            winningScreen.style.visibility = 'visible'
        }
    
        checkWinner()
})})

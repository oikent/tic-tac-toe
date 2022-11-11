const cells = document.querySelectorAll(".cell")
const board = document.querySelector('.board')




let currentPlayer = 'x'

// board.classList.add(currentPlayer)



cells.forEach((cell)=>{
    cell.addEventListener('click',()=>{
        if(currentPlayer === 'x'){
            board.classList.add(currentPlayer)
            cell.classList.add('x')
            board.classList.remove(currentPlayer)
            currentPlayer = 'o'
            
        }
        else if(currentPlayer === 'o') {
            board.classList.add(currentPlayer)
            cell.classList.add('o')
            board.classList.remove(currentPlayer)
            currentPlayer = 'x'
            
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



const cells = document.querySelectorAll(".cell")

const cellsArray = Array.from(cells)

cells.forEach((cell)=>{
    cell.addEventListener('click',()=>{
        cell.textContent = "x";
})})

// for(cell in cellsArray) {
//     cell.addEventListener('click',()=>{
//         cell.textContent = "x";
//     })
// }

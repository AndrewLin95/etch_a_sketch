const buttonPress = document.querySelectorAll('button');
const right = document.querySelector('.right');


let numOfGrids = 0;

const generateGrid = () => {                                // Generates the columns and rows depending on the number of grids requested
    let iColumn = 0;

    while (iColumn != numOfGrids){
        const gridColumn = document.createElement('div');      // Generate the column and appends the column to the right flexbox.
        right.appendChild(gridColumn);
        gridColumn.id = 'gridColumn'
        iColumn++;

        let iCell = 0;
        while (iCell != numOfGrids){                                // The loop that generates the x number of divs for the grid.
            const gridCells = document.createElement('div');
            gridColumn.appendChild(gridCells);
            gridCells.id = 'gridCells'
            iCell++;
        }
    } 
}

buttonPress.forEach(button => {
    button.addEventListener('click',() =>{
        if (button.id === '16'){
            numOfGrids = 16;
            generateGrid();
        } else if(button.id === '32'){
            numOfGrids = 32;
            generateGrid();
        }else if(button.id === '64'){
            numOfGrids = 64;
            generateGrid();
        }
    })
})

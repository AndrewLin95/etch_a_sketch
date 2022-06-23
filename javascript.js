const buttonPress = document.querySelectorAll('button');
const drawingBox = document.querySelector('.drawingBox');
const body = document.querySelector('body');  // Selects the entire body used for the mouseup event.
let isDrawing = false;
let numOfGrids = '';


const generateGrid = () => {                                // Generates the columns and rows depending on the number of grids requested
    let iColumn = 0;

    while (iColumn != numOfGrids){
        const gridColumn = document.createElement('div');      // Generate the column and appends the column to the drawingbox flexbox.
        drawingBox.appendChild(gridColumn);
        gridColumn.className = 'gridColumn';
        iColumn++;

        let iCell = 0;
        while (iCell != numOfGrids){                                // The loop that generates the x number of divs for the grid. 
            const gridCells = document.createElement('div');
            gridColumn.appendChild(gridCells);
            gridCells.className = 'gridCells';

            gridCells.addEventListener('mousemove', () =>{          // Creates eventlistners for each gridCell that detects mousemove.
               if (isDrawing === true){                             // when detected and the drawing state is true, it changes the cell
                    gridCells.style.backgroundColor = 'black';      // background color.
                }
            })
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

body.addEventListener('mouseup', () =>{         // adds an mouseup event listener to the entire body of the site. Ensures that if the
    if (isDrawing === true){                    // mousehover is moved outside of the drawing body and let go, it will still detect and 
    isDrawing = false;                          // change the drawing state
    console.log(isDrawing);
    }
})

drawingBox.addEventListener('mousedown', ()=>{  // adds a mousedown event listener to only the drawing box. This toggles the drawing state
    isDrawing = true;                           // whenever a drawing input is detected within the drawing box only.
    console.log(isDrawing);
})
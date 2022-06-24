const buttonPress = document.querySelectorAll('.sizeButton');
const drawingBox = document.querySelector('.drawingBox');
const body = document.querySelector('body');                    // Selects the entire body used for the mouseup event.
let colorSelector = document.querySelector('.colorSelector');   // Used with mousemove to change the color of the cells on click
let magicColorSelector = document.querySelector('#magicColor');

let regularColor = true;
let magicColor = false;
let isDrawing = false;
let numOfGrids = 16;
let iColumn = 0;


const generateGrid = () =>{
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
    
            console.log(iCell);
            iCell++;
    
            gridCells.addEventListener('mousemove', () =>{                                          // Creates eventlistners for each gridCell that detects mousemove.
                if (isDrawing === true && regularColor == true){                                    // when detected and the drawing state is true, it changes the cell
                    gridCells.style.backgroundColor = colorSelector.value;                          // background color using the selected color
                } else if (isDrawing == true && magicColor == true){                    
                    let colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];  // Array of the colors in the rainbow
                    let randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];          // randomizes the colors in the array
                    gridCells.style.backgroundColor = randomColor;                                      // outputs the randomized colors
                }
            })
        }
    }
}     


function deleteGrid() {                                         // Function that deletes the grid
    for (let i=0; i<numOfGrids; i++) {                          // Repeats the below function the amount of time it takes to delete the entire grid
    const column = document.querySelector('.gridColumn');       // querySelects the newly created class 'gridColumn' from the generateGrid function
    drawingBox.removeChild(column);                             // removes the columns one-by-one in drawingBox.
    }
}

buttonPress.forEach(button => {
        button.addEventListener('click',() =>{
            deleteGrid();
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

drawingBox.addEventListener('mousedown', (event)=>{  // adds a mousedown event listener to only the drawing box. This toggles the drawing state
    isDrawing = true;                                // whenever a drawing input is detected within the drawing box only.
    console.log(isDrawing);
    event.preventDefault();
})

body.addEventListener('mouseup', () =>{         // adds an mouseup event listener to the entire body of the site. Ensures that if the
    if (isDrawing === true){                    // mousehover is moved outside of the drawing body and let go, it will still detect and 
    isDrawing = false;                          // change the drawing state
    console.log(isDrawing);
    }
})


colorSelector.addEventListener('click', () =>{          // If the colorSelector is pressed, this turns off the Magic Color Button
    regularColor = true;
    magicColor = false;
})

magicColorSelector.addEventListener('click', () => {        // if the magic color button is pressed, this turns off the colorselector.
    magicColor = true;
    regularColor = false;
})



generateGrid();                                    // Generates the initial set of grid. 
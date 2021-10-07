// Sets up variables:

const container = document.querySelector('.grid-container');
const grid = document.createElement('div');


// Interface Controls:
const start = document.querySelector('#start');
const colorInput = document.querySelector('#color');
const psychedelic = document.querySelector('#psychedelic');
const eraser = document.querySelector('#eraser');
const wipe = document.querySelector('#wipe');


// Sets Div Classes:
grid.setAttribute('class', 'grid');


// Dynamically creates the elements:
container.appendChild(grid);

let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell')

const makeRows = (rowNum) => {
    for (r =0; r < rowNum; r++){
        let row = document.createElement('div');
        grid.appendChild(row).className = 'gridRow';
    };
};

const makeColumns = (cellNum) => {
    for (i = 0; i < rows.length; i++){
        for (j = 0; j < cellNum; j++){
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell).className = 'cell';
        };
    };
};

const defaultGrid = () => { 
    makeRows(16);
    makeColumns(16); 
};

start.addEventListener('click', 
defaultGrid, {once: true});

// Button Functions:
colorInput.addEventListener('input', () =>{
    let color = colorInput.value;
        for(i = 0; i < cells.length; i++){
            cells[i].addEventListener('mouseover', function (e) {
                e.target.style.background = color;  
            })  
        }
});

psychedelic.addEventListener('click', () =>{
        for(i = 0; i < cells.length; i++){
            
            if(i % 2 == 0){
                cells[i].addEventListener('mouseover', function (e) {
                    e.target.style.background = 'pink';    
                })
            }
            
            else{
                cells[i].addEventListener('mouseover', function (e) {  
                    e.target.style.background = 'purple';  
                })
            }  
        }
});

eraser.addEventListener ('click', () => {
        for(i = 0; i < cells.length; i++){
            cells[i].addEventListener('mouseover', function (e) {
                e.target.style.background = 'white';  
            })  
        }
});

wipe.addEventListener ('click', () => {
        for(i = 0; i < cells.length; i++){
            
            cells[i].style.background = 'white';  
        }
});







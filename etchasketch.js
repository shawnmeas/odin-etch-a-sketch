function generateCanvas (gridSize) {
    let target = document.getElementById('canvas');

    if(gridSize > 100)
        gridSize = 100;

    let size = 800 / gridSize;
    for(let i = 0; i < gridSize; i++)
    {
        let div = document.createElement('div');
        div.classList.add('row');
        div.setAttribute('id', 'row_'+i);
        div.style.height = size+'px'; 
        target.appendChild(div);
    }

    for(let i = 0; i < gridSize; i++)
    {
        let target = document.getElementById('row_'+i);
        for(let j = 0; j < gridSize; j++)
        {
            let div = document.createElement('div');
            div.classList.add('cell');
            div.setAttribute('id', i+'_'+j);
            div.style.height = size+'px'; 
            div.style.width = size+'px'; 
            div.addEventListener('click', function onClick(event) {
                event.target.style.backgroundColor = 'black';
            });
            target.appendChild(div);
        }
    }
}

function deleteCanvas() {
    let canvas = document.getElementById('canvas');
    while(canvas.firstChild)
    {
        canvas.removeChild(canvas.firstChild);
    }
}

function clearCanvas(gridSize) {
    deleteCanvas();
    generateCanvas(gridSize);
}

let gridSize = prompt('Enter grid size (max 100)');
generateCanvas(gridSize);

let btn = document.getElementById('clearbutton');
btn.addEventListener('click', function onClick(event) {
    clearCanvas(gridSize);
});

btn = document.getElementById('sizebutton');
btn.addEventListener('click', function onClick(event) {
    gridSize = prompt('Enter new grid size (max 100)');
    if(confirm("This will clear the current canvas. Are you sure?"))
    {
        clearCanvas(gridSize);
        return gridSize;
    }
    else
        return;
});

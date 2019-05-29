

const canvas = document.querySelector('#draw')
canvasDraw = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


canvasDraw.strokeStyle = '#BADA55';
canvasDraw.lineJoin = 'round';
canvasDraw.lineCap = 'round';


let isDrawing = false;

function mouse(e) {
    if(!isDrawing) return
    console.log(e)

}


canvas.addEventListener('mousemove', mouse);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
 


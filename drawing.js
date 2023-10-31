
let initialPosition =null;
const history =[];
let historyIndex =-1;
function onMouseDown(e){
   
    if(!(actions.circle || actions.square || actions.eraser ||actions.pencil ||actions.minusBtn)){
        return;
    }
    initialPosition = {x:e.clientX ,y:e.clientY};
    c.strokeStyle = formState.strokestyle;
    c.lineWidth = formState.strokewidth;
     
     canvas.addEventListener("mousemove" , onMouseMove);
     canvas.addEventListener("mouseup" , onMouseUp);
}
function onMouseMove(e){
    
     if(actions.pencil){
        drawFreehand( {x:e.clientX ,y:e.clientY})
     }
     else if(actions.eraser){
        handleErase({x:e.clientX ,y:e.clientY})
     }
     
}

function onMouseUp(){
   

     history.push(c.getImageData(0,0,canvas.width ,canvas.height));
     historyIndex++;
    canvas.removeEventListener("mousemove" ,onMouseMove);

    canvas.removeEventListener("mouseup" ,onMouseUp);
   
}

function drawFreehand(currentPosition){
    
    c.beginPath();
    c.moveTo(initialPosition.x ,initialPosition.y);
    c.lineTo(currentPosition.x ,currentPosition.y);
    c.lineCap = "round";
    c.lineJoin="round";
    c.stroke();
    c.closePath()
    initialPosition =currentPosition;
   
}
function handleErase(currentPosition){
   c.clearRect(currentPosition.x,currentPosition.y,10,10);
}
canvas.addEventListener("mousedown" ,onMouseDown);
let canvas = document.getElementById("canvas");

 

let c = canvas.getContext("2d");
let previousPosition = null;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let form = document.querySelector(".form");
let formState = {
    strokewidth:3,
    strokestyle:"black"
}

function toggleMenu(){
    form.classList.toggle("hide");
}
 
function onInput(e){
   let newValue = e.value;
   if(e.name ==="strokewidth"){
    formState[e.name]=parseInt(newValue);
   }
   else{
    formState[e.name]=newValue;
   }
}
 
let canvas = document.getElementById("canvas");

let middleOption = document.getElementById("middleLogo");

let c = canvas.getContext("2d");
let previousPosition = null;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

  function  iconButtonClicked(){
    middleOption.style.display ="none";
  }
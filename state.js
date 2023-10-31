const middlieNavbutton = document.querySelectorAll(".middle-nav-section>div");
let middleOption = document.getElementById("middleLogo");
let actions ={
    pencil:false,
    square:false,
    circle:false,
    eraser:false,
    minusBtn:false,
}

function iconButtonClicked(element){
     let  middleBtn = element.id;
     middleOption.style.display ="none";
     middlieNavbutton.forEach((divBtn)=>{
        if(divBtn.classList.contains("active-class")  && divBtn.id !== middleBtn){
            divBtn.classList.remove("active-class")
        }
     })
     element.classList.toggle("active-class");


     middlieNavbutton.forEach((divBtn)=>{
        let isActive = divBtn.classList.contains("active-class");
        actions[divBtn.id] = isActive;
     })
   
}
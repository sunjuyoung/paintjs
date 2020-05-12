const canvas  = document.getElementById("jsCanvas");

let painting = false;


function stopPainting(){
    painting = false;
}



function onMouseMove(event){
    /* console.log(event); */
    const x =  event.offsetX;
    const y = event.offsetY;
  /*   console.log(x,y); */
}

//캔버스에서 마우스를 눌렀을때
function onMouseDown(event){
    console.log(event);
    painting = true;


}

//캔버스에서 마우스를 땟을때
function onMouseUp(event){
    stopPainting();
}

//캔버스에서 마우스가 벗어났을때
function onMouseLeave(event){
    painting=false;
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",onMouseDown);
    canvas.addEventListener("mouseup",onMouseUp);
    canvas.addEventListener("mouseleave",stopPainting);
}
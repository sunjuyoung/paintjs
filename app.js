const canvas  = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

canvas.width=700;
canvas.height=700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth=2.5;



let painting = false;
let filling = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting=true;
}



function onMouseMove(event){
    /* console.log(event); */
    const x =  event.offsetX;
    const y = event.offsetY;
  /*   console.log(x,y); */
  if(!painting){
      ctx.beginPath();
      ctx.moveTo(x,y);
  }else{
      ctx.lineTo(x,y);
      ctx.stroke();
  }


}

//캔버스에서 마우스를 눌렀을때
function onMouseDown(event){
    console.log(event);
    painting = true;


}

//색상 변경
function handleColorClick(event){
   /*  console.log(event.target.style); */
    const color = event.target.style.backgroundColor;
    console.log(color);
    ctx.strokeStyle = color;
    ctx.fillStyle= color;
}

//선 굵기
function handleRageChange(event){
    console.log(event.target.value);
    const lineSize = event.target.value;
    ctx.lineWidth=lineSize;
}

function handleModeClick(event){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill"
    }else{
        filling = true;
        mode.innerText = "Paint"
      /*   ctx.fillStyle = ctx.strokeStyle;
        ctx.fillRect(50,20,100,49); */
    }
}


if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting); 
    canvas.addEventListener("mouseleave",stopPainting); //캔버스에서 마우스를 땟을때
}


Array.from(colors).forEach(color => 
    color.addEventListener("click",handleColorClick)
    );


    if(range){
        range.addEventListener("input",handleRageChange);
    }

    if(mode){
        mode.addEventListener("click",handleModeClick);
    }
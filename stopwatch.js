let timedisplay=document.querySelector("#timedisplay");
let start=document.querySelector("#start")
let pause=document.querySelector("#pause")
let reset=document.querySelector("#reset")
let sec=0;
let min=0;
let hour=0;
let paused=true;
let x= null
start.addEventListener("click", ()=>{
  if (paused) {
    paused=false;
  starttime();}
  x= setInterval(starttime,1000);
})
pause.addEventListener("click", ()=>{
    if (!paused) {
        clearInterval(x);
        paused=true;
    }
})
reset.addEventListener("click", ()=>{
    timedisplay.textContent=`00:00:00`
    paused=true;
    sec=0;
    min=0;
    hour=0;
    clearInterval(x)
})
function starttime(){
if (!paused) {
    sec=parseInt(sec);
    min=parseInt(min);
    hour=parseInt(hour);
    
    sec=sec+1;

    if (sec==59) {
        min=min+1;
        sec=0;
    }
    if (min==60) {
        hour=hour+1;
        min=0
    }
    sec=addkaro(sec);
    min=addkaro(min);
    hour=addkaro(hour);
    timedisplay.textContent=`${hour}:${min}:${sec}`
    function addkaro(units) {
        return (("0")+units).length > 2 ? units : "0" + units;
    }
}
}

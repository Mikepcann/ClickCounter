//declaring the staring point of the count
let x = 0;


document.getElementById('counter').innerHTML= x;

function countMover(method){
    if(method === "add"){
        x += 1;
        document.getElementById("counter").innerHTML = x;
        console.log(x);
    } else if (method === "subtract") {
        x -= 1;
        document.getElementById("counter").innerHTML = x;
        console.log(x);  
    } else  {
        x = 0;
        document.getElementById("counter").innerHTML = x;
        console.log(x);
    }
};
  
// Change value of the counter function Def
function changeValue(){
    console.log("button click, and the change value is ran");
    return document.getElementById("value").value;
    
}
//connecting the downCount() to the decrease button
document.getElementById("decrease").onclick=function(){
    countMover("subtract"); 
};
//connecting the upCount() to the increase button
document.getElementById("increase").onclick=function(){
    countMover("add");
};
//reset Count of Button
document.getElementById("reset").onclick=function(){
    countMover();
}
//Change the value of the count with tryit button
document.getElementById("clickedButt").onclick=function(){
    changeValue();
    console.log(document.getElementById("value").value)

}


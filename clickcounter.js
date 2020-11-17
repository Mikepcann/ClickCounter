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


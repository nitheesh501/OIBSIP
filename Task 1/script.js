//get number
function number(num){
var result=document.getElementById("input")
result.value+=num;
}
//get result
function result(){
    var result=document.getElementById("input")
    result.value=eval(result.value)
}
//clear result
function clearResult(){
    var result=document.getElementById("input")
    result.value=" ";
}
//cieling
function cieling(){
    var result=document.getElementById("input")
    result.value= Math.ceil(result.value);
}
//floor
function floor(){
    var result=document.getElementById("input")
    result.value= Math.floor(result.value);
}
//round
function round(){
    var result=document.getElementById("input")
    result.value= Math.round(result.value);
}
//delete char
function delchar(){
    var number=document.getElementById("input")
    var remove=number.value;
    remove=remove.slice(0,-1);//remove last character from a atring
    number.value=remove;
}

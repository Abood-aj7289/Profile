
function homeClick(i){
    
    document.getElementsByClassName("active")[0].classList.remove("active");
    i.parentNode.classList.add("active");
    document.getElementById("homeDiv").style="";
    document.getElementById("galleryDiv").style="display:none;";
    document.getElementById("contactDiv").style="display:none;";
    document.getElementById("aboutDiv").style="display:none;";
   
}
function aboutClick(i){
    document.getElementsByClassName("active")[0].classList.remove("active");
    i.parentNode.classList.add("active");
    document.getElementById("aboutDiv").style="";
    document.getElementById("galleryDiv").style="display:none;";
    document.getElementById("contactDiv").style="display:none;";
    document.getElementById("homeDiv").style="display:none;";
   
}
function contactClick(i){
    document.getElementsByClassName("active")[0].classList.remove("active");
    i.parentNode.classList.add("active");
    document.getElementById("aboutDiv").style="display:none;";
    document.getElementById("galleryDiv").style="display:none;";
    document.getElementById("contactDiv").style="";
    document.getElementById("homeDiv").style="display:none;";
}
function galleryClick(i){
    document.getElementsByClassName("active")[0].classList.remove("active");
    i.parentNode.classList.add("active");
    document.getElementById("aboutDiv").style="display:none;";
    document.getElementById("galleryDiv").style="";
    document.getElementById("contactDiv").style="display:none;";
    document.getElementById("homeDiv").style="display:none;";
}
var drCheck=true;
var drInterval;
function fotosDr(){
    if(drCheck){
let counter=1;
drInterval=setInterval(function fotos(){
//everything here will be repeated
//counter++;
counter+=1;
if(counter==12){
    counter=1;
}{
        document.getElementById("deirImg").src="./img/deir_azzor/"+counter+".jpg";
    }
},2500);
drCheck=false;
    }
    else{
        clearInterval(drInterval);
        drCheck=true;
    }
}
var hmCheck=true;
var hmInterval;
function fotosHm(){
    if(hmCheck){
    let counter=1;
    hmInterval.setInterval(function fotos(){
    //everything here will be repeated
    //counter++;
    counter+=1;
    if(counter==15){
        counter=1;
    }{
        document.getElementById("hamburgImg").src="./img/hamburg/"+counter+".jpg";  
        }
    },2500);
    hmCheck=false;}else{
        clearInterval(hmInterval);
        hmCheck=true;
    }
}
var daCheck=true;
var daInterval;
function fotosDa(){
    if(daCheck){
    let counter=1;
    setInterval(function fotos(){
    //everything here will be repeated
    //counter++;
    counter+=1;
    if(counter==19){
        counter=1;
    }{
        document.getElementById("damasImg").src="./img/damaskus/"+counter+".jpg";
        }
    },2500);
    daCheck=false;}
    else{
        clearInterval(daInterval);
        daCheck=true;
    }
}

function showMenu(){
    let checkStyle=document.getElementById("mainMenu").getAttribute("style");
    if(checkStyle=="display: block;"){
     document.getElementById("mainMenu").style="display: none;";
 }
 else{
     document.getElementById("mainMenu").style="display: block;";
 }
 }




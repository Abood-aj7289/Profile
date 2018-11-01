
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

function fotosDr(){
let counter=1;
setInterval(function fotos(){
//everything here will be repeated
//counter++;
counter+=1;
if(counter==12){
    counter=1;
}{
        document.getElementById("slideImg").src="./img/deir_azzor/"+counter+".jpg";
    }
},1000);
}
function fotosHm(){
    let counter=1;
    setInterval(function fotos(){
    //everything here will be repeated
    //counter++;
    counter+=1;
    if(counter==15){
        counter=1;
    }{
        document.getElementById("hamburgImg").src="./img/hamburg/"+counter+".jpg";  
        }
    },1000);
}
function fotosDa(){
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
    },1000);
}

function showMenu(){
    let checkStyle=document.getElementById("mainMenu").getAttribute("style");
    if(checkStyle=="display: none;"){
     document.getElementById("mainMenu").style="display: block;";
 }
 else{
     document.getElementById("mainMenu").style="display: none;";
 }
 }

 function submit() {
    document.getElementById("homeDiv").innerHTML
}


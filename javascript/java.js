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

function fotos(){
let counter=1;
setInterval(function fotos(){
//everything here will be repeated
//counter++;
//counter+=1;
counter=counter+1;
if(counter==12){
    counter=1;
}
        document.getElementById("slideImg").src="./img/Deir-Azzor/"+counter+".jpg";
},1000);
}
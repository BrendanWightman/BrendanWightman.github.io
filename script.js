var dirTxt = document.querySelector(".dir");
var mainTxt = document.querySelector(".exeText");
var spltMainTxt = mainTxt.textContent.slice("");
mainTxt.textContent = "";

var afterExeTxt = document.querySelector(".randScrlTxt");
var splExeTxt = afterExeTxt.textContent.slice("");
afterExeTxt.textContent = "";

var id = null;
var intervalLen = 500; 
var itr = 0;


function cursor(){
    clearInterval(id);
    id = setInterval(frame, intervalLen);

}

function frame() {
    if(itr === 5){
        clearInterval(id);
        intervalLen = 100;
        itr = 0;
        id = setInterval(writeTxt, intervalLen);
    }else{
        idleCursor();
        ++itr;
    }
}

function writeTxt(){
    if(itr !== spltMainTxt.length){
        dirTxt.innerHTML += spltMainTxt[itr];
        ++itr;
    }else{
        dirTxt.innerHTML += "<br>";
        clearInterval(id);
        intervalLen = 500;
        id = setInterval(idleCursor, intervalLen);
    }
}

function idleCursor(){
    if(dirTxt.textContent.charAt(dirTxt.textContent.length - 1) !== '_'){
        dirTxt.innerHTML += '_';
    }else{
        dirTxt.innerHTML = dirTxt.innerHTML.replace('_', '');
    }
}
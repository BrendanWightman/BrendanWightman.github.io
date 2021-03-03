//Brendan Wightman
//03/01/2021


var txtVariab = ["C:\\Users\\BrendanWightman>_",
                  "PersonalWebsite.exe",
                  `<br>PersonalWebsite [Version 1.0]
                   <br>-----------------------------<br>
                   Dusting off Servers...<br>
                   Feeding Gremlins...<br>
                   Generating Sweet CLI Website...<br>`];


//This needs work
var intro = "Hello, My Name is Brendan Wightman.";
var fullIntro = `I am a Computer Science Student Living in Stow, OH.
                 I Build Solutions to Problems.
                 Check Out my Projects, Resume, and Social.`;

var dirTxt = document.querySelector(".dir");
var introTxt = document.querySelector(".intro");
var introFullTxt = document.querySelector(".fullIntro");

var id = null;
var intervalLen = 150; 
var iter = 0;
var itr = 0;

function cursor(){
    dirTxt.innerHTML += txtVariab[0];
    clearInterval(id);
    id = setInterval(frame, intervalLen);
}

//All the stupid if statements are just used for timing
function frame() {
    if(itr % 4 === 0){
        idleCursor();
    }

    if(itr < txtVariab[1].length){
        deleteCursor();
        dirTxt.innerHTML += txtVariab[1][itr];
    }

    if(itr === txtVariab[1].length){
        deleteCursor();
        dirTxt.innerHTML += txtVariab[2];
        dirTxt.innerHTML += txtVariab[0];
    }

    if(itr === txtVariab[1].length + 9){
        dirTxt.innerHTML = "";
    }

    if(itr === txtVariab[1].length + 13){
        clearInterval(id);
        intervalLen = 15;
        deleteCursor();
        id = setInterval(buildPage, intervalLen);
    }
    ++itr;
}

function idleCursor(){
    if(dirTxt.textContent.charAt(dirTxt.textContent.length - 1) !== '_'){
        dirTxt.innerHTML += '_';
    }else{
        dirTxt.innerHTML = dirTxt.innerHTML.replace('_', '');
    }
}

function deleteCursor(){
    if(dirTxt.textContent.charAt(dirTxt.textContent.length - 1) === '_'){
        dirTxt.innerHTML = dirTxt.innerHTML.slice(0, -1);
    }
}

//Can probably make this cleaner
function buildPage(){
    if(iter < intro.length){
        if(intro[iter-1] === '.'){
            introTxt.innerHTML += "<br>";
        }
        introTxt.innerHTML += intro[iter];
        ++iter;
    }else if(iter < intro.length + fullIntro.length){
        if(fullIntro[iter- intro.length - 1] === '.'){
            introFullTxt.innerHTML += "<br>";
        }
        introFullTxt.innerHTML += fullIntro[iter - intro.length];
        ++iter;
    }

    

     if(iter === intro.length + fullIntro.length){
        introFullTxt.innerHTML = introFullTxt.innerHTML.replace("Projects", 
        `<a href="Projects.html" class="insideProlink">Projects</a>`);

        //Link resume pdf
        introFullTxt.innerHTML = introFullTxt.innerHTML.replace("Resume", 
        `<a href="#" class="insideProlink">Resume</a>`);


        introFullTxt.innerHTML = introFullTxt.innerHTML.replace("Social", 
        `<a href="Contact.html" class="insideProlink">Social</a>`);

        clearInterval(id);
    }

}
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
                 Check Out My Projects, Resume, and Social.`;

var dirTxt = document.querySelector("#dir");
var introTxt = document.querySelector("#intro");
var introFullTxt = document.querySelector("#fullIntro");

var id = null;
var intervalLen = 150; 
var iter = 0;
var itr = 0;

//HTML onLoad() calls this function to start animation
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

    //"PersonalWebsite.exe"
    if(itr < txtVariab[1].length){
        deleteCursor();
        dirTxt.innerHTML += txtVariab[1][itr];
    }

    // <br>PersonalWebsite [Version 1.0] etc.. + C:\\Users\\BrendanWightman>_
    if(itr === txtVariab[1].length){
        deleteCursor();
        dirTxt.innerHTML += txtVariab[2];
        dirTxt.innerHTML += txtVariab[0];
    }

    //Clear screen
    if(itr === txtVariab[1].length + 9){
        dirTxt.innerHTML = "";
    }

    //Build the rest of the page, no animation really
    if(itr === txtVariab[1].length + 13){
        clearInterval(id);
        intervalLen = 15;
        deleteCursor();
        id = setInterval(buildPage, intervalLen);
    }
    ++itr;
}

//Flashes cursor on screen
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
    //Breaks strings into deffernt lines at the '.'
    if(iter < intro.length){
        if(intro[iter-1] === '.'){
            introTxt.innerHTML += "<br>";
        }
        introTxt.innerHTML += intro[iter];
    }else if(iter < intro.length + fullIntro.length){
        if(fullIntro[iter- intro.length - 1] === '.'){
            introFullTxt.innerHTML += "<br>";
        }
        introFullTxt.innerHTML += fullIntro[iter - intro.length];
    } 


     if(iter === intro.length + fullIntro.length){

        //Link projects
        introFullTxt.innerHTML = introFullTxt.innerHTML.replace("Projects", 
        `<a href="Projects.html" class="insideProlink">Projects</a>`);

        //Link resume pdf
        introFullTxt.innerHTML = introFullTxt.innerHTML.replace("Resume", 
        `<a href="Resume.pdf" class="insideProlink">Resume</a>`);

        //Link social
        introFullTxt.innerHTML = introFullTxt.innerHTML.replace("Social", 
        `<a href="Contact.html" class="insideProlink">Social</a>`);

        document.querySelector("#codingLan").style.display = "block";
        document.querySelector("#relCourseWork").style.display = "block";
        document.querySelector("#experience").style.display = "block";
        document.querySelector("#technologies").style.display = "block";
        document.querySelector("#pExp").style.display = "block";

        clearInterval(id);
    }
    ++iter;

}
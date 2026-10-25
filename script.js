tabcontent = document.getElementsByClassName("tabcontent");
tablink = document.getElementsByClassName("tablinks")
const buttonFrames=["button/button1", "button/button2", "button/button3"]
const start = document.getElementById("startButton");
const quiz = document.getElementById("quizText");
const quizImg = document.getElementById("quizImage");
const left = document.getElementById("leftArrow");
const right = document.getElementById("rightArrow");
const solution = document.getElementById("solutionButton");
const solutionTxt = document.getElementById("solutionText");
const quizDiv = document.getElementById("quizDiv");
let quizNum = 0;
let quizNumber=quizNum%5+1;
let quizText = "location "+quizNumber+"/5";
let src = "quizImg/"+quizNumber+".png"

for(i=1;i<tabcontent.length;i++)
{
    tabcontent[i].style.display="none"
}
tablink[0].classList.add("tablinks-clicked");

start.addEventListener('click', () => {
    quiz.innerHTML=(quizText);
    quiz.style.display = "block";
    right.style.display = "block";
    left.style.display = "block";
    quizDiv.classList.add("quizImgDiv");

    quizImg.src=src;
    quizImg.style.display = "block";
    start.style.display = "none";

    solution.style.display = "block";
});

left.addEventListener('click', () => {
    quizNum = quizNum + 4;
    quizNumber = quizNum%5+1;
    quizText = "location "+quizNumber+"/5";
    quiz.innerHTML = (quizText);
    src = "quizImg/"+quizNumber+".png"
    quizImg.src = src;
    quizImg.style.display = "block";
    solution.style.display = "block";
    solutionTxt.style.display = "none";
});

right.addEventListener('click', () => {
    quizNum = quizNum + 1;
    quizNumber = quizNum%5+1;
    quizText = "location "+quizNumber+"/5";
    quiz.innerHTML = (quizText);
    src = "quizImg/"+quizNumber+".png";
    quizImg.src = src;
    quizImg.style.display = "block";
    solution.style.display = "block";
    solutionTxt.style.display = "none";

});

solution.addEventListener('click', () => {
    solution.style.display = "none";
    getSol(quizNumber);
    solutionTxt.style.display = "block";
});

async function getSol(num)
{
    try
    {
        const response = await fetch("quizTxt/" + num + ".txt")
        const solutionsTxt = await response.text();
        solutionTxt.innerHTML=solutionsTxt;
    }
    catch (error)
    {
        console.error("uh oh. something went wrong", error);
    }
}

function openTab(event, name)
{
    var i, tablinks;
    for(i=0;i<tabcontent.length;i++)
    {
        tabcontent[i].style.display="none"
    }

    tablinks=document.getElementsByClassName("tablinks");
    for(i=0;i<tablinks.length;i++)
    {
        tablinks[i].className=tablinks[i].className.replace(" active","");
        tablinks[i].classList.remove("tablinks-clicked");
    }


    document.getElementById(name).style.display="block";
    let buttonName = name+"B";
    document.getElementById(buttonName).classList.add("tablinks-clicked");
    event.currentTarget.className += " active";
}

/*var i, tablinks;
    for(i=0;i<tabcontent.length;i++)
    {
        tabcontent[i].style.display="none";
    }

    
    for(i=0;i<tablinks.length;i++)
    {
        tablinks[i].className=tablinks[i].className.replace(" active","");
        tablink[0].classList.remove("tablinks-clicked");
    }


    document.getElementById(name).style.display="block";
    document.getElementById(name).classList.add("tablinks-clicked");
    event.currentTarget.className += " active";*/
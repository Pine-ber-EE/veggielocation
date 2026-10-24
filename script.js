tabcontent = document.getElementsByClassName("tabcontent");
tablink = document.getElementsByClassName("tablinks")
const buttonFrames=["button/button1", "button/button2", "button/button3"]
for(i=1;i<tabcontent.length;i++)
{
    tabcontent[i].style.display="none"
}
tablink[0].classList.add("tablinks-clicked");

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
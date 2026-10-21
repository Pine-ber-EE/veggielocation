tabcontent = document.getElementsByClassName("tabcontent");
for(i=1;i<tabcontent.length;i++)
{
    tabcontent[i].style.display="none"
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
    }


    document.getElementById(name).style.display="block";
    event.currentTarget.className += " active";
}

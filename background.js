function theme()
{
    switch(document.getElementById("themes").value)
    {
        case "dark":  document.body.style.backgroundColor = 'black';
        break;
        case "white": document.body.style.backgroundColor = 'white';
        break;
        case "purple": document.body.style.backgroundColor = 'purple';
        break;
        case "not":  document.body.style.backgroundColor = 'white';
        break;

    }
}

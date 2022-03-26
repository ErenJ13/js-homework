function clickMe() {
    let urnameInput = document.getElementById('uname');
    let sayhi = urnameInput.value + ' Привет';
    document.getElementById('result').innerHTML = sayhi;
}

document.getElementById('say').addEventListener('click', clickMe);

function multiplication()
{
    let x1Input = Number(document.getElementById('x').value);
    let y1Input = Number(document.getElementById('y').value);
    let result1 = x1Input * y1Input;
    
    document.getElementById('result1').innerHTML = result1;
}
document.getElementById('mult').addEventListener('click', multiplication);

function division()
{
    let x1Input = Number(document.getElementById('x').value);
    let y1Input = Number(document.getElementById('y').value);
    if (y1Input != 0)
    {
        let result1 = x1Input / y1Input;
        document.getElementById('result1').innerHTML = result1;
    }
    else
    {
        
        document.getElementById('result1').innerHTML = 'На ноль делить нельзя';
    }
}
document.getElementById('div').addEventListener('click', division);

function addition()
{
    let x1Input = Number(document.getElementById('x').value);
    let y1Input = Number(document.getElementById('y').value);
    let result1 = x1Input + y1Input;
    
    document.getElementById('result1').innerHTML = result1;
}
document.getElementById('add').addEventListener('click', addition);

function substraction()
{
    let x1Input = Number(document.getElementById('x').value);
    let y1Input = Number(document.getElementById('y').value);
    let result1 = x1Input - y1Input;
    
    document.getElementById('result1').innerHTML = result1;
}
document.getElementById('sub').addEventListener('click', substraction);

function select(sender)
{
    sender.classList.add("selected");
}

function select1(sender)
{
    sender.classList.remove("bg");
    sender.classList.add("selected1");
}

function next()
{

    let mycat = document.getElementById('mycat');
mycat.src = "/assets/img/IMG_0992.jpeg";
    
    }
    function back()
{

    let mycat = document.getElementById('mycat');
mycat.src = "/assets/img/IMG_0100.jpeg";
    
    }

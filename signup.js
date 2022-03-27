function check()
{
    let resultname = document.getElementById("firstname").value;
    let resultlastname = document.getElementById("lastname").value;
    let resultmonth = document.getElementById("month").value;
    let resultday = document.getElementById("day").value;
    let resultyear = document.getElementById("year").value;
    let resultemail = document.getElementById("email").value;
    let resultpassword = document.getElementById("password").value;

    if (resultname == '')
    {
        alert('Ваше поле не заполнено!');
        
        
    }
    else if (resultlastname == '')
    {
        alert('Ваше поле не заполнено!');
    }
    else if (resultmonth == 'Выберите...')
    {
        alert('Ваше поле не заполнено!');
    }
    else if (resultday == 'Выберите...')
    {
        alert('Ваше поле не заполнено!');
    }
    else if (resultyear == 'Выберите...')
    {
        alert('Ваше поле не заполнено!');
    }
    else if (resultemail == '')
    {
        alert('Ваше поле не заполнено!');
    }
    else if (resultpassword == '')
    {
        alert('Ваше поле не заполнено!');
    }
    else{
        alert("Добро пожаловать, " + resultname + '!');
    }

}


let chbox = document.getElementById('gridCheck');;
let buttonsubmit = document.getElementById("button")

chbox.addEventListener("change", function(event)
{
    if (event.target.checked) {
        buttonsubmit.disabled = false;
      }
      else {
        buttonsubmit.disabled = true;
      }
    }, false );


let modal = document.getElementById("mymodal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
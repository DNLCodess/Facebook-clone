function validation(){

const input = document.querySelector('.input').value;
const form = document.getElementById('form');
const text = document.getElementById('text');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(input.match(pattern))
{
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Valid";
    text.style.color = "red";
}
else
{
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "error";
    text.style.color =  "red";
}
if(text.innerHTML == ""){
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
}
}
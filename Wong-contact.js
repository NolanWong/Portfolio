let submitButton = document.querySelector(".submit");
let messages = document.querySelector(".comms").value;
let usrName=document.querySelector(".usrName").value;
let thank=document.querySelector(".thank");
let nav3=document.querySelector(".navbar-con3");
let eMail=document.querySelector(".eMail").value;
// Displays thanks message and resets navbar
submitButton.addEventListener("click", function() {
let eMail_value=eMail.value;
let messages_value=messages.value;
let usrName_value=usrName.value
thank.style.display="block"
console.log(usrName_value)
if (nav3.style.marginTop==19.4){
nav3.style.marginTop="16.5%"
}
else{
    nav3.style.marginTop="22.5%"
}
});

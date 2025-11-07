let submitButton = document.querySelector(".submit");
let messages = document.querySelector(".comms").value;
let usrName=document.querySelector(".usrName").value;
let thank=document.querySelector(".thank");
let nav=document.querySelector(".contact");
let eMail=document.querySelector(".eMail").value;
// Displays thanks message and resets navbar
submitButton.addEventListener("click", function() {
let eMail_value=eMail.value;
let messages_value=messages.value;
let usrName_value=usrName.value;
thank.style.display="block";
console.log(usrName_value);
nav.style.paddingBottom="11.1%";
})

'use strict';

var person = window.prompt("Enter your name: ");
alert('Hello ' + person + '!' + ' Welcome to Patriot Woodworking!');
var name = prompt('Are you a veteran or currently serving in the armed forces?').toLowerCase().trim();
var welcome;
if(name === 'yes'){
  welcome = 'Thank you for your service ' + person + '. ';
  var years = prompt(person + ', how many total years of active duty have you served?');
  if(years >= 10){
    welcome += 'Enjoy 20% off of all merchandise using the code "truepatriot" at checkout.';
  } else if(years >= 5){
    welcome += 'Enjoy 15% off of all merchandise using the code "eaglenest" at checkout.'; 
  } else {
    welcome += 'Enjoy 10% off of all merchandise.';
  } 
} 
else if (name === 'no'){
  welcome = 'Thank you for viewing our Website.  We contribute 10% of all purchases to the Wounded Warrior Association.';
} else {
  alert('Something went wrong.  Please refresh the page and select "yes or no".');
}
document.getElementById('discount-placeholder').textContent = welcome;

//Begin Form 

  
function validate(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length >= 400){
    text = "Please Enter Less Than 400 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
}

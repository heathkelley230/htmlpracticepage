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
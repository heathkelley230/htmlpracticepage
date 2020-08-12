'use strict';
console.log('ready');
var name = prompt('Are you a veteran or currently serving in the armed forces?').toLowerCase().trim();
// variable declaration for the response to being a veteran
var welcome;
if(name === 'yes'){
  welcome = 'Thank you for your service.  Please enjoy a 20% discount for any items purchased using the code "truepatriot".';
} else if (name === 'no'){
  welcome = 'We contribute 20% of all purchases to the Wounded Warrior Association.';
} else {
  welcome = 'Something went wrong.  Please select "yes or no"';
}
document.getElementById('discount-placeholder').textContent = welcome;
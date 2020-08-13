'use strict';
console.log('ready');

var person = window.prompt("Enter your name: ");
alert('Hello ' + person + '!' + ' Welcome to Patriot Woodworking!');
var name = prompt('Are you a veteran or currently serving in the armed forces?').toLowerCase().trim();
var welcome;
if(name === 'yes'){
  welcome = 'Thank you for your service' + person + '.';
} if(name === 'yes'){
  var years = prompt(person + ', how many total years of active duty have you served?');
} else if(years > 10){'Thank you for your service.  Enjoy 20% off of all merchandise.';
} else if((years > 5) && (years < 11)){'Thank you for your service.  Enjoy 15% off of all merchandise.'; 
} else if (years < 6){'Thank you for your service.  Enjoy 10% off of all merchandise.';
} 

document.getElementById('discount-placeholder').textContent = years;


else if (name === 'no'){
  welcome = 'Thank you for viewing our Website.  We contribute 20% of all purchases to the Wounded Warrior Association.';
} else {
  alert('Something went wrong.  Please refresh the page and select "yes or no"');
}
document.getElementById('discount-placeholder').textContent = welcome;

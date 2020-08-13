'use strict';
 
var person = window.prompt("Enter your name: ");
alert('Hello ' + person + '!' + ' Welcome to Patriot Woodworking!');
 
var name = prompt('Are you a veteran or currently serving in the armed forces?').toLowerCase().trim();

var welcome;
 
if(name === 'yes'){
 welcome = alert('Thank you for your service ' + person + '.' + ' Please enjoy a 20% discount for any items purchased using the code "truepatriot".');
} else if (name === 'no'){
 welcome = alert('Thank you for viewing our Website.  We contribute 20% of all purchases to the Wounded Warrior Association.');
} else {
 alert('Something went wrong.  Please refresh the page and select "yes or no"');
}

var donation = prompt('Would you consider donating to the Wounded Warrior Association?').toLowerCase().trim();

var woundedwarrior;
 
if(donation === 'yes'){
 woundedwarrior = 'Thank you for your generosity ' + person + '.' + ' Please select the donation dropdown to add your donation amount at checkout.';
} else if (donation === 'no'){
 woundedwarrior = 'Thank you for viewing our Website.  We contribute 20% of all purchases to the Wounded Warrior Association.';
} else {
 alert('Something went wrong.  Please refresh the page and try again.');
}

document.getElementById('discount-placeholder').textContent = woundedwarrior;



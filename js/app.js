'use strict';
var discountplaceholder = document.getElementById('discountplaceholder');
var person = askForName();
alert('Hello ' + person + '! Welcome to Patriot Woodworking!');
var service = askAboutService();

if(service === 'yes') {

//years served validation

  var years = yearsserved();
  var discount = 0;
  if(years <=24){
      discountplaceholder.textContent = 'Thank you for your service.  Please enjoy 15% off your purchase.';
      discount = 0.15;
    }
    else if(years >=25){
      discountplaceholder.textContent = 'Thank you for your service.  Please enjoy 20% off of your purchase.';
      discount = 0.20;
    }
} else{
  discountplaceholder.textContent = 'Thank you for viewing our Website.  We contribute 10% of all purchases to the Wounded Warrior Association.';
} 

//Begin Calculation Table
var total_items = 3;
var itemID;
function CalculateItemsValue() {
	var total = 0;
	for (var i=1; i<=total_items; i++) {
		itemID = document.getElementById("qnt_"+i);
		if (typeof itemID === 'undefined' || itemID === null) {
			alert("No such item - " + "qnt_"+i);
		} else {total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")) * (1 - discount);
		}
	}
	document.getElementById("ItemsTotal").innerHTML = "$" + total;
}
//End Calculation Table

function yearsserved() {
  var yearsquestion = 'How many years have you served?';
  var years = cleanUp(prompt(yearsquestion));
  years = validateyears(yearsquestion, years);
  return years;
}

function validateyears (yearsquestion, inputyears) {
  while(inputyears <0 || inputyears >100) {
    alert ('Please enter a valid number 1-99.');
    inputyears = cleanUp(prompt(yearsquestion));
  }
  return inputyears;
}

//section for name and whether they have served

function askForName() {
  var person = prompt("Enter your name: ");
  return person;
}

function askAboutService() {
  var question = 'Are you a veteran or currently serving in the armed forces?';
  var service = cleanUp(prompt(question));
  service = validateYesNo(question, service);
  return service;
}

function cleanUp (input) {
  return input.toLowerCase().trim();
}

function validateYesNo(question, input) {
  while(input !== 'yes' && input !== 'no') {
    alert ('Please enter a yes or no answer.');
    input = cleanUp(prompt(question));
  }
  return input;
}


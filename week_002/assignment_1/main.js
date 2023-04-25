

// program to convert celsius to fahrenheit
// ask the celsius value to the user 
const celsius = prompt("Enter a celsius value: ");

// calculate fahrenheit
const fahrenheit = (celsius * 1.8) + 32

// display the result
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

//function temperatureConverter(valNum) {
//  valNum = parseFloat(valNum);
//  document.getElementById("outputFahrenheit").innerHTML=(valNum*(9/5))+32;
//}


let firstName = "David";
let lastName = "Ayala";
let yearsOfStudy = "2022-2024";
let goal = "XR-Development";

document.body.innerHTML = "<h1>My name is " + firstName + lastName + ". I have been at SCC for " + yearsOfStudy + " and plan to " + goal + " after completing my courses."; 


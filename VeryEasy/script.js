'use strict';

let numOne = "";
let numTwo = "";

while (!numOne || !numTwo) {
    numOne = Number(prompt("Please enter a number of your choice"));
    if (Number.isNaN(numOne)) {
        alert("Only numbers are allowed");
        continue;
    }  
    numTwo = Number(prompt("Please enter a second number of your choice"));
    if ( Number.isNaN(numTwo)) {
        alert("Only numbers are allowed");
    }  
    
};

const min = function(numOne, numTwo) {
    if (numOne > numTwo) {
        return numTwo;
    } else {
        return numOne;
    }  
};

console.log(min(numOne, numTwo));
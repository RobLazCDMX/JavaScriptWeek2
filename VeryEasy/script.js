'use strict';



const min = function(numOne, numTwo) {
    if (numOne > numTwo) {
        return numTwo;
    } else {
        return numOne;
    }  
}

console.log(min(7, 6));
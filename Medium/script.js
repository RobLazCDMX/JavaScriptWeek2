'use strict';


const months = {
    1 : "January",
    2 : "February",
    3 : "March",
    4 : "April",
    5 : "May",
    6 : "June",
    7 : "July",
    8 : "August",
    9 : "September",
    10 : "October",
    11 : "November",
    12: "December"
};
// console.log(months);
const numMonth = prompt("Enter a number 1 through 12 to select the month of your choice");

if (months[numMonth]) {
    
    console.log(months[numMonth]);  
} else {
    const wrongInput = prompt("Wrong input! Please enter a number 1 through 12 to select the month of your choice");
    console.log(wrongInput);
}
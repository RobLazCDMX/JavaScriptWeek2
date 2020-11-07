"use strict";

const months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

let numMonth = 0;

while (!months[numMonth]) {
  //true
  numMonth = Number(prompt("Please enter a number 1 through 12 to select the month of your choice"));

  if (Number.isNaN(numMonth)||!months[numMonth]) {
    alert("Only numbers 1 through 12 are allowed");
    // continue;
  }
};
console.log(months[numMonth]);

// This if statement can be added if we are looking for a more precise warning/alert:

//   if (!months[numMonth] || (numMonth <1 || numMonth >12)) {
//     alert("Number is not valid month");
//     continue;
//   }

// just make sure to delete this code: ||!months[numMonth] from line 28 and to activate  // continue; on line 30.
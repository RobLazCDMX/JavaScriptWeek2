'use strict';


const firstName = ["Tom", "Jerry"];

const massTom = 3632; // convert everything to grams : 1 lb * 454
const massJerry = 45;
const heightTom = 22.86; // convert everything to centemeters : 1 inch * 2.54
const heightJerry = 10;

const tomBMI = massTom / (heightTom ** 2);
const jerryBMI = massJerry / (heightJerry ** 2);


if(tomBMI > jerryBMI) {
    console.log(`Tom's BMI of ${tomBMI} is higher than Jerry's ${jerryBMI} BMI`);
} else {
    console.log(`Jerry's BMI of ${jerryBMI} is higher than Tom's ${tomBMI} BMI`);
}

'use strict';


const jerry = {
    mass: 45,
    height: 10,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};

const tom = {
    mass: 8, 
    height: 9, 

    calcBMI: function () {
        this.BMI = this.mass/(this.height ** 2);
        return this.BMI;   
    }
};

jerry.calcBMI ();
tom.calcBMI();
// console.log(jerry.BMI, tom.BMI )

function BMIsummary () {
    return ` Is Tom’s BMI higher than Jerry’s? ${tom.BMI > jerry.BMI}!`;
}

console.log(BMIsummary(tom.BMI > jerry.BMI));



// if(tom.BMI > jerry.BMI) {
//     console.log(`Tom's BMI of ${tom.BMI} is higher than Jerry's ${jerry.BMI} BMI`);
// } else {
//     console.log(`Jerry's BMI of ${jerry.BMI} is higher than Tom's ${tom.BMI} BMI`);
// }








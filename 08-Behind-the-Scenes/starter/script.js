'use strict';

/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating new variable with same name as outer scope's variable
            const firstName = 'Steven';

            // Reassigning outer scope's variable
            output = 'NEW OUTPUT';

            const str = `Oh, and you're a millenial, ${firstName}.`
            console.log(str);

            function add(a, b) {
                return a + b;
            }

        }
        console.log(millenial);
        //console.log(add(2, 3));  STRICT MODE
        console.log(output)
    }
    printAge();
    return age;
}

const firstName = 'Besim';
calcAge(1994);
*/

/*
// Hoisting with Variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Besim';
let job = 'Student';
const year = 1994;


// Hoisted Functions
console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));


function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

// Example hoist with var

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/*
// 'this' lecture

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
};
calcAgeArrow(1991);

const besim = {
    year: 1994,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    }
};
besim.calcAge();


const matilda = {
    year: 2017,
};

matilda.calcAge = besim.calcAge;
matilda.calcAge();

const f = besim.calcAge;
f();
*/
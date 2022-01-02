'use strict';


// Challenge #1
/*
const julia = [9, 16, 6, 8, 3]
const kate = [10, 5, 6, 1, 4]

const checkDogs = function (dogsJulia, dogsKate) {
    //1.
    const correctJulia = dogsJulia.slice(1, -2);
    //2.
    const alldogs = [...correctJulia, ...dogsKate]
    //3.
    alldogs.forEach(function (dog, index) {
        if (dog < 3) {
            console.log(`Dog number ${index + 1} is still a puppy`);
        } else {
            console.log(`Dog number ${index + 1} is an adult, and is ${dog} years old`);
        }
    })

}

//4.
checkDogs(julia, kate)
*/

// Challenge #2
/*
const calcAverageHumanAge = function (ages) {
    //1. 
    let humanAge;
    humanAge = ages.map((age) => age <= 2 ? humanAge = 2 * age : humanAge = 16 + age * 4)
    console.log(humanAge);
    //2.
    humanAge = humanAge.filter((age) => age >= 18)
    console.log(humanAge);
    //3.
    humanAge = humanAge.reduce((acc, curr, i, arr) => acc + curr / arr.length, 0)
    return humanAge;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))
*/
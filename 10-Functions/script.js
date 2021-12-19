'use strict';

// Functions
/*
const bookings = [];

const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123')
createBooking('LH123', 2, 800)
createBooking('LH123', 2)
createBooking('LH123', 5)

createBooking('LH123', undefined, 1000)
*/

// Functions
/*

const flight = 'LH234';
const besim = {
    name: 'Besim Musliu',
    passport: 234738479284
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 234738479284) {
        alert('Checked in')
    } else {
        alert('Wrong passport!')
    }
}

// checkIn(flight, besim)
// console.log(flight);
// console.log(besim);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000);
}
newPassport(besim);
checkIn(flight, besim)
*/

// High Order functions
/*
const oneWord = function (str) {
    return str.replaceAll(' ', '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-Order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord)
transformer('JavaScript is the best!', oneWord)

// JS uses calbacks all the time
const high5 = function () {
    console.log('👋');
}
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

// 
/*
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven')

greet('Hello')('Besim');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Besim')
*/

//
/*
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    },
};

lufthansa.book(239, 'Besim Musliu');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

//Call method 
book.call(eurowings, 23, 'Sarah Williams')
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
};

book.call(swiss, 583, 'Mary Cooper')
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData)
console.log(swiss);

book.call(swiss, ...flightData)

// Bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

// Partial Application
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Besim Musliu')
bookEW23('Martha Cooper')


// With EventListeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.10, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));


const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

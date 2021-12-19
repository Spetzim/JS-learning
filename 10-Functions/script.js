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


'use strict';

// CODINGCHALLENGE #1
/*
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);


//3.
const allPlayers = [...players1, ...players2]
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//5.
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;

const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

//6.
const printGoals = function (...players) {
    console.log(...players, 'Total score:', players.length);
}
printGoals('Davies', 'muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7.
team1 < team2 && console.log('team 1 is more likely to win');
team2 < team1 && console.log('team 2 is more likely to win')
*/

// CODINGCHALLENGE #2
/*


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1.
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
    average += odd;
}
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`Odd of ${teamStr} ${odd}`);
}


// BONUS
const scorers = {};
for (const player of game.scored) {
    if (scorers[player] === 1) {
        scorers[player] += 1;
    } else {
        scorers[player] = 1
    }
    //scorers[player] ? scorers[player]++ : (scorers[player] = 1);

}
console.log(scorers);
*/

// CODINGCHALLENGE #3
/*
const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())]
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const time = [...gameEvents.keys()].pop()
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// 4.
for (const [minute, happened] of gameEvents) {
    const str = minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'
    console.log(`${str} ${minute}: ${happened}`)
}
*/

// CODINGCHALLENGE #4
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

// TEST DATA

underscore_case
 first_name
Some_Variable
  calculate_AGE
  delayed_departure


document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');

        const output = `${first}${second.replace(
            second[0],
            second[0].toUpperCase()
        )}`
        console.log(`${output.padEnd(20)}${'✔'.repeat(i + 1)}`);
    }
})


// MY SOLUTION
const displayMessage = function (message) {
    document.querySelector('textarea').textContent = message;
}

document.querySelector('button').addEventListener('click', function () {
    let text = document.querySelector('textarea').value;
    text = text.replaceAll(' ', '');
    let splittedText = text.split('\n')
    let words;
    let finalString;
    for (let i = 0; i < splittedText.length; i++) {
        words = splittedText[i].split('_')
        finalString = words[0].toLowerCase() + words[1][0].toLocaleUpperCase() + words[1].slice(1).toLowerCase();
        console.log(finalString.padEnd(finalString.length, '++++++++'));
    }

})
    * /

/*

const btnRoll = document.querySelector('.btn--roll');

btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. Generate random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);

        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3. Check for rolled 1: if true switch to next player
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
})
*/


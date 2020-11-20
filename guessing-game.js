const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}



let secretNumber = 0;
let count = 0;

let askRange = function() {
    rl.question("How many turns would you like? ", turns => {
        rl.question('Enter a max number : ', answer => {
            answer
            rl.question('Enter a min number: ', answer2 => {
                console.log(`I'm thinking of a number between ${answer2} and ${answer}...`)
                secretNumber = randomInt(answer2, answer)
                count = Number(turns)
                askGuess();
            });
        });
    });
}

function checkGuess(num) {
    if (num > secretNumber) {
        console.log("Too high");
        return false;
    }
    if (num < secretNumber) {
        console.log("Too low");
        return false;
    }
    console.log("Correct!")
    return true;
}

function askGuess() {
    if (count === 0) {
        return 'You lose'
    }
    count--
    rl.question('Enter a guess: ', answer => {
        if (checkGuess(Number(answer))) {
            rl.close();
        } else {
            askGuess()
        }
    });
}

askRange()
    // console.log(secretNumber)
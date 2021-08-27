const prompt = require('prompt-sync')();
const number = prompt('Enter any number to print prime factors: ')
let count = 0;
const numberArray = [];
let isPrime = 0;

for ( i = 2; i <= number; i++ ) {
    if ( number % i == 0 ) {
        isPrime = 1;
        for ( j = 2; j <= i / 2; j++ ) {
            if ( i % j == 0) {
                isPrime = 0;
            }
        }
        if ( isPrime == 1 ) {
            numberArray[count] = i;
            count++;
        }
    }
}
console.log(numberArray)
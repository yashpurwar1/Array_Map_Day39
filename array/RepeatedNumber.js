let start = 1;
let end = 100;
let count = 0;
const number = [];

while ( start <= end ) {
    if ( start % 11 == 0) {
            number[count] = start;
            count++;
        }
    start++;
}
console.log('Repeated numbers are: ' +number);
MAXCOUNT = 10;
const number = [];
count = 0;
while (count < MAXCOUNT){
    number[count] = Math.floor(Math.random()*900)+100;
    count++;
}
console.log("Given numbers:", number);
for ( i = 0; i < MAXCOUNT ; i++ ) {
    for ( j = i; j < MAXCOUNT; j++ ) {
        if ( number[i]  > number[j] ) {
            temp = number[i];
            number[i] = number[j];
            number[j] = temp;
        }
    }
 }
 
console.log("Sorted Numbers " +number);
 

console.log("Second minimum value is: " +number[1]);
console.log("Second maximum value is: " +number[number.length - 2]);
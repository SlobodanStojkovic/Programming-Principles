var punishment = '';

for (var i = 0; i < 100; i++) { //inicijalizacija i = 0, uslov i < 100, increment i++
    punishment += 'I will never do this again\n';   
}

console.log(punishment);




var sum = 0;

for(var i = 1; i <= 100; i++) {
    sum = sum + i;
}

/*
1. Iteracija: i = 1, 1 <= 100 (true), sum = sum + i(sum = 0 + 1), sum = 1, i++(2),
2. Iteracija: i = 2, 2 <= 100 (true), sum = sum + i(sum = 1 + 2), sum = 3 i++(3),
3. Iteracija: i = 3, 3 <= 100 (true), sum = sum + i(sum = 3 + 3), sum = 6 i++(4),
...
100. i = 100, 100 <= 100 (true), sum = sum + i(sum = 4950 + 100), sum = 5050 i++(101),
101. i = 101, 101 <=100 (false), end
*/

console.log(sum);






var sum = 0;

for (var i = 1; i <= 100; i++) {
    if (sum === 0) {
        console.log('Current sum is ' + sum);
    }
    sum = sum + i;

    if(sum > 30) {
        break;
    }
console.log('Adding ' + i + '. Current sum is ' + sum);
}

//TRY TO WRITE A FEW ITERATIONS FOR ABOVE EXAMPLE - PRACTICE













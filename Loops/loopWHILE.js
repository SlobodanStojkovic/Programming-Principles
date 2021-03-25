var count = 0;

while (count < 10) {
    console.log(count);
    count = count + 1;
}

/*Log first
Prva iteracija: count = 0 => 0 < 10(true) => log(0) => count = count + 1 => count = 1;
Druga iteracija: count = 1 => 1 < 10(true) => log(1) => count = count + 1 => count = 2;
Treca iteracija: count = 2 => 2 < 10(true) => log(2) => count = count + 1 => count = 3;
.... ovo se ponavlja sve dok
Deseta iteracija:   count = 9 => 9 < 10(true) => log(9) => count = count + 1 => count = 10;
Jedanaista iteracija - proba da se izvede ali count = 10 => 10 < 10(false) => end;  daje kraj petlje
*/

while (count < 10) {
    count = count + 1;
    console.log(count);
}


/*Increment first
count = count + 1;
console.log(count);
Prva iteracija: count = 0 => 0 < 10(true) => count = count + 1 => log(1);
Druga iteracija: count = 1 => 1 < 10(true) => count = count + 1 => log(2);
Treca iteracija: count = 2 => 2 < 10(true) => count = count + 1 => log(3);
....
Jedanaesta iteracija: count = 10 => 10 < 10(false) => end;

/*
while (true) {                      Ovo je beskonačna petlja i ona predstavlja grešku.
    count = count + 1;
    console.log(count);
}
*/ 

var count = 0;
while (true) {
    if (count === 10) {
        break;
    }
    count = count + 1;
    console.log(count);
}


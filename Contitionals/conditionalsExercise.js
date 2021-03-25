

var a = 4
var b = 3

if (a > b) {
    console.log(a)
} else if (b > a) {
    console.log(b)
}    else {
        console.log('equal')
    }









    /*
var a; typeof a; -UNDEFINED
var s = '1s'; s++; - NaN
!!"false";      - ?
!!undefined;    - ?
typeof -Infinity;   - ?
10 % "0";   NaN

undefined == null;      - ? daje true zato sto je undefined nema vrednost i to je jednako null a a ko stavimo === onda je false jer je provera po tipu i po vrednosti

false === "";           - ? false jer su obe vrednosti falsy, tipovi su različiti, imamo boolean i prazan string pa je zato resenje false
typeof "2E+2";     - String zato što je pod navodnicima
a = 3e+3; a++;      - 3001 zato što 3e+3 daje 3000 zatim a++ daje 3000 + 1 daje 3001
*/

    a = 3e+3; 
    a++
console.log(a);
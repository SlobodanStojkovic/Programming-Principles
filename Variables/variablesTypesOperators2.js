//25.02.2021. 18:00 h Dario Stamenkovic


var a = 22;

var b = true;

var c = a && b; //i a i b moraju da budu tačni da bi rezultat bio tačan;

// true && true = true 
// false && true = false
// true && false = false
// false && false = false


// true || true = true 
// false || true = true
// true || false = true
// false || false = false


//&& - i
// || - ili


console.log(!!0)



false && false || true && true //daju na kraju true, jer trazimo na netu precedence, vaznost, i gledamo sta se prvo radi pa onda na osnovu toga odredjujemo, tj radimo zadatak


var isLoggedIn = true;

var c = isLoggedIn && 'ulogovan je'; // ako je prva vrednost true, dodelice se druga vrednost

var d = isLoggedIn || 'neka vrednost'  // dodeljuje se neka vrednost samo ako je prva vrednost negativna

console.log(c)
console.log(d)






var cart = 44;
var total = cart || 0;
console.log(total)





var cart = 0;
var total = cart || 'prazna korpa';
console.log(total)






var a = 3;
var c = 4;
var result = a <= c;  //ako je dupli znak jednakosti a == c ili trodupli znak jednakosti to znači: === strozi je i proverava i po vrednosti i po tipu, tipa da li je 4 i '4' isto, nije isto jer je '4' po vrednosti isto ali je string a prvo 4 je broj. Generalno se koristi === i pozeljnije je. Samo jedan znak jednakosti dodeljuje vrednost.
console.log(result)

//coercion kucati u google da naucimo i procitamo nesto vise, jedna varijabla moze da sadrzi jedan tip podataka, dynamic typing vise tipova podataka.


// !== provera da li nije jednako po vrednosti i po tipu (strogo nije jednako)

//boolean tip podataka i vrednosti true ili false
//undefined tip podataka i jedina vrednost undefined
//null tip podataka i jedina vrednost null



console.log(typeof c) //ovako kucamo da problem ne bi pukao vec pitamo da nam kaze tip






var nekibroj = 34e+5 //pomeranje decimalne tačke za 5 mesta udesno, 3400000 (3 miliona i 400 hiljada)
console.log(nekibroj)



var nekibroj = 34e-5 //pomeramo decimalnu tačku za 5 mesta ulevo, 0,00034
console.log(nekibroj)



var nekavrednost = 45 + "nesto"
console.log(nekavrednost)               //js pokusava da svede na istu vrednost, pa pretvara 45 u string i rezultat je 45nesto


var nekavrednost = 2 - "1"//js zna da je minus samo za brojeve i zato 1 pretvara u broj pa funkcionise kao  broj iako je string
console.log(nekavrednost)  



var c;
var nekavrednost = null + "nesto"
console.log(nekavrednost)




var c;
var nekavrednost = 'dario\'s pencel' //znak \ pokazuje da ' ne koristi za zatvaranje stringa.
console.log(nekavrednost)


// \n znači kao kraj reda, kada udarimo enter npr., u stvari to je novi red

// \t - kao da smo udarili tab na tastaturi

// \u - znači da je iza tog znaka Unicode character

// dve kose linije ispred single block komentar u JS

/* kosa linija i zvezdica - block komentar koji mora i da se zavrsi sa */ 



var a; 
typeof a;
console.log(a)




var c;
console.log(typeof typeof c) //uvek vraca typeof u stringu


var s = "1s"; s++;
console.log(s)






//blocks > statements > expressions
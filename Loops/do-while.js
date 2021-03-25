var count = 10;

do {
    count++; //increment operator
    console.log('do-while: ', count);
} while (count < 10); // ukoliko jeste manje, ponovo treba da izvrši DO block, ukoliko nije nastavi sa izvršenjem koda


// 1: count = 10 => count++ => count = 11 => log(11) => 11 < 10(false) => end; DO PRVO IZVRŠI BLOCK KOD { }

while (count < 12) {
    count++;
    console.log('while: ', count);
}


//New example


var i = 7;

do {
    i++;
    console.log('When console.log is inside block code', i);
} while (i < 10); 

console.log('When console.log is outside block code', i); 
























var array = [];

!array /* daje kao rezultat true*/

var array1 = [];

array == array1 /* Vraća FALSE bez obzira što su oni potpuno jednaki, isto vraća FALSE i kada se stave 3 znaka nejednakosti. Iako izgledaju isto, nisu na istoj adresi, nisu im iste reference -> Analogija sa stanovima i zgradama. Dve identične zgrade ili stanovi koji su identični ali nisu na istim adresama. */

array = [1, 2, 3];

array1 = [1, 2, 3];

array == array1 // opet vraća FALSE jer se nalaze na drugom mestu u memorijskom prostoru


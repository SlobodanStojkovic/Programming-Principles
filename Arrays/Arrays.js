var array = [];

!array /* gives true as a result*/

var array1 = [];

array == array1 /* Returns FALSE no matter that they are completely equal, it returns also FALSE with 3 equal signs === . Even thought they look the same they are not on the same address, they dont have the same references -> Analogy with apartments and buildings. Two identical buildings or apartments that are identical but they are not on same addreses.  */

array = [1, 2, 3];

array1 = [1, 2, 3];

array == array1 // again it returns FALSE because they are on other place in memory


var a = 1;
var b = 3;
var c = 2;

var max = a;
var min = a;

if(b > max) {
    max = b;
}
if(c > max) {
    max = c;
}

if(b < min) {
    min = b;
}
if(c < min) {
    min = c;
}

//This can work only if we have 3 numbers to sort, if there is 4th number it will be hard to follow, we need to include mid1, mid2 and it makes the algoritm complex. Sorting arrays is not how it needs to be done. This was Ivan explaining Alexandar Bisevac sorting.

if(b < max && b > min) {
    mid = b;
} if(c < max && c > min) {
    mid = c;
}

console.log(max, mid, min)
/*
1. Write an array of months in a year. Using console.log display June, October and January from the array.
*/

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log (months[5], months[9], months[0]);



/*
2. Write an arrays of days in a week. Using console.log display Sunday from the array.
*/

var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(weekdays[6], weekdays[weekdays.length - 1]); // weekdays[weekdays.length - 1]);   - ovo je drugi način
 



/*
3. Print all negative elements from the array [2, -4, 5, -2, -11].  
*/

var neg = [2, -4, 5, -2, -11];
console.log(neg[1], neg[3], neg[4]);

/*
4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18, 72, 14, 9]. 
*/

var nums = [5, 15, -5, 20, 12, 18, 72, 14, 9];  //trazi se indeks deljiv sa 3
console.log(nums[0], nums[3], nums[6])



/*
5. What is the index of number 24 in the following array?                           !   Rešenje je console.log(array[0][3]);    !
[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

Using console.log:
Display the 3rd element of the array,            !   Rešenje je console.log(array[2]);      !
Display the 2nd element of the 3rd element.      !   Rešenje je console.log(array[2][1]);   !
*/

var array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log(array[0][3]);

console.log(array[2]);
console.log(array[2][1]);
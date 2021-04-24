//with Ivan Balic 24.04.2021. - 10:50


//This method is called selection sort

var array = [3, 1, 65, 7, 9, 2, 103];

function sortAssc(arr) {
    for (var i = 0; i < arr.length; i++) {
        var min = arr[i]; //assumption that the first element is the smallest
        var indexOfMin = i;
        var temp = arr[i];
        var element = arr[i];
        console.log("i=" + i + ": " + arr)
        for (var j = i; j < array.length; j++) {
            var element = arr[j];
            if (element < min) {
                min = element;
                indexOfMin = j;
            }
        }
        arr[i] = min;
        arr[indexOfMin] = temp;
        console.log(i + ": " + arr)
    }

    return arr;
}

console.log(sortAssc(array));






//This method is called Bubble sort - Algorithm is easier but it has a lot more iterations

var array = [3, 1, 65, 7, 9, 2, 103];

function sortAssc(arr) {
    for (var j = 0; j < arr.length; j++) {
        console.log("j=" + j + ": " + arr)
        for (var i = 0; i < arr.length; i++) {
            var element = arr[i];
            var next = arr[i + 1];

            if (element > next) {
                arr[i] = next;
                arr[i + 1] = element;
            }
            console.log("i=" + i)
        }

    }
    return arr;
}
console.log(sortAssc(array));
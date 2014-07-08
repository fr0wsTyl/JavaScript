//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a script that finds the maximal sequence of equal elements in an array...';

//Cheking number
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var arr = [2, 4, 5, 1, 10, 12];
    var temp = 0;

    for (k = 0; k < 20; k++) {
        arr[k] = Math.round(Math.random() * 100);
    }
    jsConsole.writeLine("Initial array: " + arr);

    for (var i in arr) {
        for (j = 0; j < arr.length; j++) {
            var min = arr[j];
            if (arr[i] < min) {
                min = arr[i];
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    jsConsole.writeLine("Sorted array: " + arr);
    console.log(arr);
}, false)

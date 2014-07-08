//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a program that finds the index of given element in a sorted array of integers by using the binary search algorithm (find it in Wikipedia).';

//Cheking number
var check = document.getElementById('check');
check.addEventListener('click', function () {
    var array = [3, 4, 5, 6, 7, 34, 54, 78, 88];
    jsConsole.writeLine("Array: " + array)
        var min = 0;
        var max = array.length - 1;
        var key = 5;
        var found = false;
        var mid;
        var index;

        while (!found && min <= max) {
            mid = parseInt((min + max) / 2);
            if (array[mid] == key) {
                index = mid;
                found = true;
            }
            else if (array[mid] < key) {
                min = mid + 1;
            }
            else {
                max = mid - 1;
            }
        }
        jsConsole.writeLine(index);
}, false)

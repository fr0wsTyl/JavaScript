//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a program that finds the most frequent number in an array.';

//Cheking number
var check = document.getElementById('check');
check.addEventListener('click', function () {
     var arr = [3,0, 3, 7, 5,3, 2, 10, 6, 9, 4, 2, 6, 9, -1, -4,3, 4, 7, ];
        var arrTEMP = new Array(1);
        for (var i = 0; i < arr.length - 1; i++) {
            for (var k = 0; k < arr.length - 1 - i; k++) {
                if (arr[k] > arr[k + 1]) {
                    arrTEMP = arr[k];
                    arr[k] = arr[k + 1];
                    arr[k + 1] = arrTEMP;
                }
            }
        }
        jsConsole.writeLine("arr = " + arr.join(" | "));

        var count = 0;
        var countMFN = 0; 
        var mostFN;

        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] == arr[i + 1]) {
                count += 1;
                if (countMFN < count) {
                    countMFN = count;
                    mostFN = arr[i];
                }
            } else {
                count = 1;
            }
        }
        jsConsole.writeLine("mostFN = " + mostFN);
        jsConsole.writeLine("countMFN = " + countMFN);
        jsConsole.writeLine(mostFN + " (" + countMFN + " times )");
}, false)

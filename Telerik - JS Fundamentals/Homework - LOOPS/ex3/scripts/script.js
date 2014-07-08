//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a script that finds the max and min number from a sequence of numbers...';

//Printing number
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var num3 = parseInt(document.getElementById('num3').value);
    var num4 = parseInt(document.getElementById('num4').value);
    var num5 = parseInt(document.getElementById('num5').value);
    var result = document.getElementById('result');
    var arr = [num1, num2, num3, num4, num5];
    arr.sort(function(a, b) {
        return a - b;
    });
    var max = arr[4];
    var min = arr[0];
    jsConsole.write('Min number is ' + min);
    jsConsole.write(' Max number is ' + max);
}, false)

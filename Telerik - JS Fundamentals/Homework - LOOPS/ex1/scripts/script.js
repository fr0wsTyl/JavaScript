//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a script that prints all the numbers from 1 to N...';

//Printing number
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var number = parseInt(document.getElementById('number').value);
    var result = document.getElementById('result');
    for (var i = 0; i <= number; i++) {
        if (number < 1000) {
            jsConsole.writeLine(i);
        }
        else {
            result.innerHTML = 'Number is too big';
        };
    };
}, false)

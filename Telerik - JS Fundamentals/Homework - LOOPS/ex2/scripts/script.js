//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time...';

//Printing number
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var number = parseInt(document.getElementById('number').value);
    var result = document.getElementById('result');
    for (var i = 1; i <= number; i++) {
        if ((i % 3 == 0) && (i % 7 == 0)) {
            jsConsole.write(' --- prazno --- ');
        } else {
        	jsConsole.write(i + ' ');
        };
    };
}, false)

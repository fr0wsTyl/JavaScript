//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write script that asks for a digit and depending on the input shows the name of that digit (in English) using a switch statement [ FROM 0 TO 9 ]...';

//Cheking number
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var code = parseInt(document.getElementById('code').value);
    var result = document.getElementById('result');
    switch (true) {
        case (code == 1):
            result.innerHTML = 'one';
            break;
        case (code == 2):
            result.innerHTML = 'two';
            break;
        case (code == 3):
            result.innerHTML = 'three';
            break;
        case (code == 4):
            result.innerHTML = 'four';
            break;
        case (code == 5):
            result.innerHTML = 'five';
            break;
        case (code == 6):
            result.innerHTML = 'six';
            break;
        case (code == 7):
            result.innerHTML = 'seven';
            break;
        case (code == 8):
            result.innerHTML = 'eight';
            break;
        case (code == 9):
            result.innerHTML = 'nine';
            break;
        case (code <= 0 || code >= 10):
            result.innerHTML = ('Number isn\'t in range ( 1 - 9 )');
            break;
    }
}, false)

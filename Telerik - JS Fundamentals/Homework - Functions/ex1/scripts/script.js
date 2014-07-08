//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a function that returns the last digit of given integer as an English word...';

//Printing number
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var number = parseInt(document.getElementById('number').value);
    var result = document.getElementById('result')
        function check(number) {
            var numberStr = number.toString();
            var last = numberStr.charAt(numberStr.length -1);
            switch (true) {
                case (last == 1):
                    return 'one';
                    break;
                case (last == 2):
                    return 'two';
                    break;
                case (last == 3):
                    return 'three';
                    break;
                case (last == 4):
                    return 'four';
                    break;
                case (last == 5):
                    return 'five';
                    break;
                case (last == 6):
                    return 'six';
                    break;
                case (last == 7):
                    return 'seven';
                    break;
                case (last == 8):
                    return 'eight';
                    break;
                case (last == 9):
                    return 'nine';
                    break;
            }
        }
    jsConsole.writeLine(check(number));
}, false)

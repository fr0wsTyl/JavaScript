//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a JavaScript function reverses string and returns it...';

//Reversing string
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var string = document.getElementById('number').value;
    var stringStr = string.toString();
    var numst = stringStr.split('').reverse().join('');
        function check(string) {
            jsConsole.writeLine(string); 
        }
    check(numst);
}, false)
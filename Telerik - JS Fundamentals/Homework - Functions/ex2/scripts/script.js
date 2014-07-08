//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a function that reverses the digits of given decimal number...';

//Reversing number
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var number = document.getElementById('number').value;
    var result = document.getElementById('result');
    var numberStr = number.toString();
    var numst = numberStr.split('').reverse().join('');
        function check(number) {
            jsConsole.write(number); 
        }
    check(numst);
}, false)
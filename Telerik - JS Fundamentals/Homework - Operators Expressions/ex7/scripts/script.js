//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write an expression that checks if given positive integer number n (n ≤ 100) is prime. E.g. 37 is prime....';

//Cheking number
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var code = parseInt(document.getElementById('code').value);
    var result = document.getElementById('result');
    var al = (code % 3 == 0);
    var al2 = (code % 2 == 0);
    if (!al2 && !al) {
    	result.innerHTML = code + ' is prime.';
    }
    else {
    	result.innerHTML = code + ' is NOT prime.';
    }
    if (isNaN(code)) {
    	result.innerHTML = code + ' is NOT a number.';
    };
}, false)
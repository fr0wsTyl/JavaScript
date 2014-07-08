//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write an expression that checks for given integer if its third digit (right-to-left) is 7. E. g. 1732 -> true...';

//Cheking number
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var code = parseInt(document.getElementById('code').value);
    var result = document.getElementById('result');
    var algo = parseInt(code / 100);
    if (algo % 10 === 7) {
    	result.innerHTML = code + ' is third digit (right-to-left) is 7.';
    }
    else {
    	result.innerHTML = code + ' is NOT third digit (right-to-left) with 7.';
    }
    if (isNaN(code)) {
    	result.innerHTML = code + ' is NOT a number.';
    };
}, false)
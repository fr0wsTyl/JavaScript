//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time...';

//Cheking number
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var code = document.getElementById('code').value;
    var result = document.getElementById('result');
    var e1 = (code%7 === 0);
    var e2 = (code%5 === 0);
    if (e1 && e2) {
    	result.innerHTML = code + ' is devided by 7 and 5 in the same time.';
    }
    else {
    	result.innerHTML = code + ' is NOT devided by 7 and 5 in the same time.';
    }
    if (isNaN(code)) {
    	result.innerHTML = code + ' is NOT a number.';
    };
}, false)
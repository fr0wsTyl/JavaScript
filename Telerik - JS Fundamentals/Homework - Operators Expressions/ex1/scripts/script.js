//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Expression that checks if given integer is odd or even. <br /> Waiting for number...';

//Cheking number
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var code = document.getElementById('code').value;
    var result = document.getElementById('result');
    if (code % 2 === 0) {
        result.innerHTML = code + ' is EVEN';
    } else {
        result.innerHTML = code + ' is ODD';
    }
    if (isNaN(code)) {
        result.innerHTML = code + ' is NOT a number.';
    };
}, false)
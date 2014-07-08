//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a boolean expression for finding if the bit 3 (counting from 0) of a given integer is 1 or 0..';

//Cheking number
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var code = parseInt(document.getElementById('code').value);
    var result = document.getElementById('result');
    var binary = (code.toString(2));
    console.log(binary);
    if (binary[3] == 1) {
        result.innerHTML = code + ' ' + 'in binary is: ' + binary + ' and third bit (from 0) is ' + binary[3];
    } 
    else if (code <= 7) {
        result.innerHTML = code + ' haven\'t third bit.';
    }
    else {
        result.innerHTML = code + ' ' + 'in binary is: ' + binary + ' and third bit (from 0) is ' + binary[3];
    };
    if (isNaN(code)) {
        result.innerHTML = code + ' - Not a Number';
    };
}, false)

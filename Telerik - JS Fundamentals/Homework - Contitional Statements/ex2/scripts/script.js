//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a script that shows the sign (+ or -) of the product of three real numbers without calculating it. Use a sequence of if statements...';

//Chek numbers
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var first = parseInt(document.getElementById('x').value);
    var second = parseInt(document.getElementById('y').value);
    var third = parseInt(document.getElementById('z').value);
    var result = document.getElementById('result');
    var countNegativNumbers = 0;
    if (first < 0) {
        countNegativNumbers++;
    }
    if (second < 0) {
        countNegativNumbers++;
    }
    if (third < 0) {
        countNegativNumbers++;
    }
    var printStr = "The sign of the sum of ";
    printStr += first + "; ";
    printStr += second + "; ";
    printStr += third;
    if (countNegativNumbers % 2 == 0) {
        result.innerHTML = (printStr + " is '+'");
    } else {
        result.innerHTML = (printStr + " is '-'");
    }
}, false)

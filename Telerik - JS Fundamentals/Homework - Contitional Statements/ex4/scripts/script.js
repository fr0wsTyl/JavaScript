//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Sort 3 real values in descending order using nested if statements...';

//Chek numbers
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var first = parseInt(document.getElementById('x').value);
    var second = parseInt(document.getElementById('y').value);
    var third = parseInt(document.getElementById('z').value);
    var result = document.getElementById('result');
    if (first > second && first > third) {
        if (second > third) {
            result.innerHTML = third + ' ' + second + ' ' + first;
        } else {
            result.innerHTML = second + ' ' + first + ' ' + first;
        };
    } else if (second > first && second > third) {
        if (first > third) {
            result.innerHTML = third + ' ' + first + ' ' + second;
        } else {
            result.innerHTML = first + ' ' + second + ' ' + second;
        };
    } else if (third > first && third > second) {
        if (first > second) {
            result.innerHTML = second + ' ' + first + ' ' + third;
        } else {
            result.innerHTML = first + ' ' + second + ' ' + third;
        };
    };
}, false);

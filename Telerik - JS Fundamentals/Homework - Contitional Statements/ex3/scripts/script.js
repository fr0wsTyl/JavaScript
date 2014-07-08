//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a script that finds the biggest of three integers using nested if statements...';

//Chek numbers
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var x = parseInt(document.getElementById('x').value);
    var y = parseInt(document.getElementById('y').value);
    var z = parseInt(document.getElementById('z').value);
    var result = document.getElementById('result');
    if (x > y) {
        if (x > z) {
            result.innerHTML = 'The biggest number is Num1 --- ' + x;
        }
    }
    else if (z > y) {
        if (z > x) {
            result.innerHTML = 'The biggest number is Num3 --- ' + z;
        }
    }
    else {
        result.innerHTML = 'The biggest number is Num2 --- ' + y;
    };
}, false)

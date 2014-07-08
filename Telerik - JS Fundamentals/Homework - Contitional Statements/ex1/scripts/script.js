//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write an if statement that examines two integer variables and exchanges their values if the first one is greater than the second one...';

//Calculating rectangle’s area
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var x = parseInt(document.getElementById('x').value);
    var y = parseInt(document.getElementById('y').value);
    var result = document.getElementById('result');
    if (x > y) {
        y = x;
        result.innerHTML = 'Greater number is Num1 -- ' + x + '<br />' + 'Now Num2 has value of Num1 --  ' + y;
    } else {
        x = y;
        result.innerHTML = 'Greater number is Num2  -- ' + y + '<br />' + 'Now Num1 has value of Num2 -- ' + x;
    }
}, false)

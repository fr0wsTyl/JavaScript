//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write an expression that checks if given print (x,  y) is within a circle K(O, 5)...';

//Calculating rectangle’s area
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var x = parseInt(document.getElementById('x').value);
    var y = parseInt(document.getElementById('y').value);
    var result = document.getElementById('result');
    var radius = 5;
    if ((x * x + y * y) < radius * radius) {
        result.innerHTML = ("Point (" + x + "," + y + ") is within circle K(0,5)");
    } else {
        result.innerHTML = ("Point (" + x + "," + y + ") is outside circle K(0,5)");
    }
}, false)

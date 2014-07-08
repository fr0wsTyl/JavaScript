//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a script that enters the coefficients a, b and c of a quadratic equation a*x2 + b*x + c = 0 and calculates and prints its real roots. Note that quadratic equations may have 0, 1 or 2 real roots...';

//Chek numbers
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var a = parseInt(document.getElementById('x').value);
    var b = parseInt(document.getElementById('y').value);
    var c = parseInt(document.getElementById('z').value);
    var result = document.getElementById('result');
    var x1;
    var x2;
    var determinant;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result.innerHTML = ("a, b, c must be a number");
    } else {
        result.innerHTML = ("Roots of ax" + '\u00B2' + "+bx+c:");
        if (a != 0) {
            determinant = b * b - 4 * a * c;
            if (determinant > 0) {
                x1 = (-b + Math.sqrt(determinant)) / (2 * a);
                x2 = (-b - Math.sqrt(determinant)) / (2 * a);
                result.innerHTML = ("x1= " + x1 + "; x2= " + x2);
            }
            if (determinant == 0) {
                x1 = (-b) / (2 * a);
                result.innerHTML = ("x1,2 = " + x1);
            }
            if (determinant < 0) {
                result.innerHTML = ("There is no real roots");
            }
        } else if (b != 0) {
            x1 = (-c) / b;
            result.innerHTML = ("x1,2 = " + x1);
        } else {
            result.innerHTML = ("No quadratic equation");
        }
    }
}, false)

//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write an expression that calculates trapezoid\'s area by given sides a and b and height h..';

//Calculating trapezoid's area
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var side1 = parseInt(document.getElementById('side1').value);
    var side2 = parseInt(document.getElementById('side2').value);
    var height = parseInt(document.getElementById('height').value);
    var trapezoid = document.getElementById('trapezoid');
    var el = document.getElementById('else');
    if (side1 && side2 && height) {
        trapezoid.style.visibility = 'initial';
        trapezoid.style.borderBottom = height + "px solid #ccc";
        trapezoid.style.width = (side1 + side2) + "px";
        el.innerHTML = ' ';
    }
    else if(!side1){
        el.innerHTML = 'Side 1 is missing';
    }
    else if (!side2) {
        el.innerHTML = 'Side 2 is missing';
    }
    else if (!height) {
        el.innerHTML = 'Height is missing';
    };
}, false)

//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write an expression that checks for given point (x, y) if it is within the circle K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2)...';

//Expression
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var X = parseInt(document.getElementById('x').value);
    var Y = parseInt(document.getElementById('y').value);
    var result = document.getElementById('result');
    var Xc = 1;
    var Yc = 1;
    var radius = 3;
    var XL = -1;
    var YL = 1;
    var width = 6;
    var height = 3;
    var XR = XL + width;
    var YR = YL - height;
    var InCircle = false;
    var InRec = false;

    if (((X - Xc) * (X - Xc) + (Y - Yc) * (Y - Yc)) < radius * radius) {
        InCircle = true;
    } else {
        InCircle = false;
    }

    if ((X > XL && X < XR) && (Y < YL && Y > YR)) {
        InRec = true;
    } else {
        InRec = false;
    }
    result.innerHTML = (InCircle.toString() + InRec.toString());
    if (InCircle == true && InRec == false) {
    	result.innerHTML = ("Point (" + X + "," + Y +") is within circle K((" + Xc +","+ Yc +")," + radius + ") and out of rectangle R(top=" + XL + ", left=" + YL + ", width=" + width + ", height={" + height + ").");
    }
    else {
    	result.innerHTML = ("Point (" + X + "," + Y +") is within circle K((" + Xc +","+ Yc +")," + radius + ") and out of rectangle R(top=" + XL + ", left=" + YL + ", width=" + width + ", height={" + height + ") is NOT correct.");
    }
}, false)

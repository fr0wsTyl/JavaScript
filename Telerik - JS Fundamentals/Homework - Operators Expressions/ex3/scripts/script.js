//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Expression that calculates rectangle’s area by given width and height..';

//Calculating rectangle’s area
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var width = parseInt(document.getElementById('width').value);
    var height = parseInt(document.getElementById('height').value);
    var rectangle = document.getElementById('rectangle');
    if (!isNaN(width && height)) {
        rectangle.style.visibility = "initial";
        rectangle.style.width = width + "px";
        rectangle.style.height = height + "px";
    }
    else if (isNaN(width || height)){
        rectangle.style.visibility = "hidden";
        rectangle.style.color = "#ffffff";
        var el = document.getElementById('else');
        el.innerHTML = width + ' or ' + height + ' is not a number';
    };
}, false)

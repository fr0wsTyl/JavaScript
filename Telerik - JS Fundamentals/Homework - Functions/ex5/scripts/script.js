//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a function that counts how many times given number appears in given array... <br /><br />ARRAY ELEMENTS MUST BE SEPERATED BY SPACE, LIKE THIS: "5 3 3 1 4 1 12" !!!';

//Printing number
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var array = document.getElementById('array').value;
    var numvalue = parseInt(document.getElementById('number').value);
    var result = document.getElementById('result');
    var arrayStr = array.toString();
    var arr = arrayStr.split(' ');

    function check(number) {
        var counter = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == number) {
                counter++;
            }
        };
        return counter;
    }
    var timesRepeated = check(numvalue);
    if(timesRepeated > 0){
        jsConsole.writeLine('The number ' + numvalue + ' is repeated ' + timesRepeated + ' times.')
    }
    else{
        jsConsole.writeLine('The number ' + numvalue + ' is not existing in the array.')
    }
}, false)
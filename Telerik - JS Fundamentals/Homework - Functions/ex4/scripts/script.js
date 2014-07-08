//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a function to count the number of divs on the web page...';

//Printing number
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var result = document.getElementById('result');
    function printDivs(divs) {
        jsConsole.write('We have ' + divs.length + ' divs');
    }
    printDivs(document.getElementsByTagName('div'));
}, false)

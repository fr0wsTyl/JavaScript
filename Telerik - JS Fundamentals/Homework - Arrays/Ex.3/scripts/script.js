//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a script that finds the maximal sequence of equal elements in an array..';
result.innerHTML = ( 'В масива : '  + [2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
//Cheking number
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var numbers = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
    var counter = 1,
        Length = 1,
        StartIndex = 0;
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] == numbers[i - 1]) {
            counter++;
            if (counter >= Length) {
                Length = counter;
                StartIndex = i - Length + 1;
            }
        } else {
            counter = 1;
        }
    }
    jsConsole.writeLine("Имаме: " + Length + " пъти " + numbers[StartIndex]);

}, false)
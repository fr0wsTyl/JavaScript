//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a script that finds the maximal increasing sequence in an array.';
result.innerHTML = ('В масива : ' + [3, 2, 3, 4, 2, 2, 4]);
//Cheking number
var check = document.getElementById('check');
check.addEventListener('click', function() {
        var numbers = [3, 2, 3, 4, 2, 2, 4];
        var index = 0;
        var counter = 1;
        var length = 1;

        for (var i = 1; i < numbers.length; i++) {
            counter = numbers[i - 1] < numbers[i] ? counter + 1 : 1;

            if (counter > length) {
                length = counter;
                index = i - counter + 1;
            }
        }
        var result = "";
        for (var i = index; i < index + length; i++) {
            result = result + numbers[i] + " ";
        };

        jsConsole.write('Имаме: ' + result);
}, false)

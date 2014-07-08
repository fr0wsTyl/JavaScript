//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a function that checks if the element at given position in given array of integers is bigger than its two neighbors (when such exist)...';

function func(numbers, position) {
    var numbers = numbers.split(',');

    if (numbers[position] > numbers[parseInt(position) + 1] && numbers[position] > numbers[parseInt(position) - 1]) {
        return alert(true);
    } else {
        return alert(false);
    }

}

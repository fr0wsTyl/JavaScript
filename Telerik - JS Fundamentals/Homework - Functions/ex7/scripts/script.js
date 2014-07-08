//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a function that returns the index of the first element in array that is bigger than its neighbors, or -1, if there’s no such element...';


function checkElement(numbers, position) {

    if (numbers[position] > numbers[parseInt(position) + 1] && numbers[position] > numbers[parseInt(position) - 1]) {
        return true;
    } else {
        return false;
    }

}
function checkAll(numbers) {
    var numbers = numbers.split(',');
    for (var i = 0; i < numbers.length; i++) {
        if (checkElement(numbers, i) == true)
            return alert(i);
    };
    return alert(-1);
}

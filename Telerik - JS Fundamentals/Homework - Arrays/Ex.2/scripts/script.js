//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a script that converts a number in the range [0...999] to a text corresponding to its English pronunciation...';

//Cheking number
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var arr1 = ['a', 'b', 'c', 'd'];
    var arr2 = ['a', 'b', 'd', 'c', 'e'];
    jsConsole.writeLine('Array 1: ' + arr1);
    jsConsole.writeLine('Array 2: ' + arr2);
    jsConsole.writeLine('');
    for (var i = 0; i <= arr2.length - 1; i++) {
        if (arr1[i] == undefined) {
            jsConsole.writeLine('Array 1, element ' + i + ': ' + '"' + 'No element on this index.' + '"' + ' - Array 2, element ' + i + ': ' + '"' + arr2[i] + '"')
        }
        else if (arr2[i] == undefined) {
            jsConsole.writeLine('Array 1, element ' + i + ': ' + '"' + arr1[i] + '"' + ' - Array 2, element ' + i + ': ' + '"' + 'No element on this index.' + '"')
        }
        else {
            if (arr1[i] == arr2[i]) {
                jsConsole.writeLine('Array 1, element ' + i + ': ' + '"' + arr1[i] + '"' + ' - Array 2, element ' + i + ': ' + '"' + arr2[i] + '"' + ' These elements are the same.');
            }
            else {
                jsConsole.writeLine('Array 1, element ' + i + ': ' + '"' + arr1[i] + '"' + ' - Array 2, element ' + i + ': ' + '"' + arr2[i] + '"')
            }
        }
        
        
    }
}, false)

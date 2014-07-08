//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5. Print the obtained array on the console...';

//Printing number
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var arr = new Array(20);
    for (var i = 0; i <= arr.length - 1; i++) {
        arr[i] = i * 5;
    };
    jsConsole.writeLine(arr);
}, false);

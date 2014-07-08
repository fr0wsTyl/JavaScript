//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a function that finds all the occurrences of word in a text...';

function func(textField, word, caseSensitive) {
    var textField = textField.split(' ');

    if (caseSensitive) {

        var counter = 0;
        for (var i = 0; i < textField.length; i++) {
            if (textField[i] == word)
                counter++;
        }
        return alert(counter + " times");
    } else {
        var counter = 0;

        for (var i = 0; i < textField.length; i++) {
            if (textField[i].toLowerCase() == word.toLowerCase())
                counter++;
        }
        return alert(counter + " times");
    }

}

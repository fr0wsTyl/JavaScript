//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects...';

function getPropertiesOfObject(obj) {
    var min = 0;
    var max = 0;
    for (var i in obj) {
        if (!min) {
            min = i;
        }
        if (!max) {
            max = i;
        }
        if (i < min) {
            min = i;
        }

        if (i > max) {
            max = i;
        }
    }
    var newRow = document.createElement('tr');
    var col1 = document.createElement('td');
    col1.innerHTML = obj.toString();
    var col2 = document.createElement('td');
    col2.innerHTML = min;
    var col3 = document.createElement('td');
    col3.innerHTML = max;
    newRow.appendChild(col1);
    newRow.appendChild(col2);
    newRow.appendChild(col3);
    document.getElementById('results').appendChild(newRow);
}

function onFindProperties() {
    var newRow = document.createElement('tr');
    var col1 = document.createElement('th');
    col1.innerHTML = "OBJECT";
    var col2 = document.createElement('th');
    col2.innerHTML = "Min Property";
    var col3 = document.createElement('th');
    col3.innerHTML = "Max Property";
    newRow.appendChild(col1);
    newRow.appendChild(col2);
    newRow.appendChild(col3);
    document.getElementById('results').appendChild(newRow);

    getPropertiesOfObject(document);

    getPropertiesOfObject(window);

    getPropertiesOfObject(navigator);
}

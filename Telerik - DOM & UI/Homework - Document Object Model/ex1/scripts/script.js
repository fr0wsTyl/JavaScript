// Everything start with this function

function createDivs() {
    var inDiv = document.getElementById('div');
    var value = parseInt(document.getElementById('value').value);
    for (var i = 0; i < value; i++) {
        //Random
        var randomWH = Math.floor(Math.random() * 80 + 20);
        var randomColor1 = Math.floor(Math.random() * 254 + 1);
        var randomColor2 = Math.floor(Math.random() * 254 + 1);
        var randomColor3 = Math.floor(Math.random() * 254 + 1);
        var randomPosition = Math.floor(Math.random() * 100);
        var randomBorder = Math.floor(Math.random() * 19 + 1);
        var created = document.createElement('div');
        //Randoming style
        created.id = 'divs';
        created.style.width = randomWH + 'px';
        created.style.height = randomWH + 'px';
        created.style.backgroundColor = 'rgb(' + randomColor1 + ',' + randomColor2 + ',' + randomColor3 + ')';
        created.style.color = 'rgb(' + randomColor3 + ',' + randomColor1 + ',' + randomColor2 + ')';
        created.style.margin = randomPosition + 'px';
        created.style.border = '' + randomBorder + 'px solid ' + 'rgb(' + randomColor3 + ',' + randomColor1 + ',' + randomColor2 + ')';
        created.style.borderRadius = randomBorder + 'px';
        created.innerHTML = 'div';
        inDiv.appendChild(created);
    }
}

var submitBtn = document.getElementById('user-submit');
var result = document.getElementById('result');
var randomNumber = Math.floor(Math.random() * 8999 + 1000).toString();
var sheep;
var ram;
submitBtn.addEventListener('click', function() {
    var userValue = document.getElementById('user-value').value;
    if (userValue.length !== 4) {
        result.innerHTML = 'Числото трябва да бъде 4 символа.';
    } else {
        startGame(userValue);
    }
})
function startGame(value) {
    ram = 0;
    sheep = 0;
    for (var i = 0; i < value.length; i++) {
        if (randomNumber[i] === value[i]) {
            ram++;
        }
        for (var j = i; j < randomNumber.length; j++) {
            if (randomNumber[j] === value[i] && randomNumber[i] !== value[i]) {
                sheep++;
            }
        };
    };
    localStorage.setItem('sheep', sheep);
    localStorage.setItem('ram', ram);
    if (localStorage.getItem('ram') == 4) {
        result.innerHTML = 'Congratulations! You win ! RAMS > ' + localStorage.getItem('ram');
    } else {
        result.innerHTML = 'Sheeps > ' + localStorage.getItem('sheep') + ' Rams > ' + localStorage.getItem('ram');
    }
}
if (!localStorage.getItem('sheep') && !localStorage.getItem('ram')) {
    result.innerHTML = 'Ready to play?';
} else {
    result.innerHTML = 'FROM LAST PLAY: Sheeps > ' + localStorage.getItem('sheep') + ' Rams > ' + localStorage.getItem('ram');
}
//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a script that finds the greatest of given 5 variables...';

//Chek numbers
var check = document.getElementById('check');
check.addEventListener('click', function() {
    var first = parseInt(document.getElementById('first').value);
    var second = parseInt(document.getElementById('second').value);
    var third = parseInt(document.getElementById('third').value);
    var fourth = parseInt(document.getElementById('fourth').value);
    var fifth = parseInt(document.getElementById('fifth').value);
    var result = document.getElementById('result');
    //Nested if statements
    if (first > second) {
        if (first > third) {
            if (first > fourth) {
                if (first > fifth) {
                    result.innerHTML = 'Greatest number is ' + first;
                };
            };
        };
    };
    if (second > first) {
        if (second > third) {
            if (second > fourth) {
                if (second > fifth) {
                    result.innerHTML = 'Greatest number is ' + second;
                };
            };
        };
    };
    if (third > first) {
        if (third > second) {
            if (third > fourth) {
                if (third > fifth) {
                    result.innerHTML = 'Greatest number is ' + third;
                };
            };
        };
    };
    if (fourth > first) {
        if (fourth > second) {
            if (fourth > third) {
                if (fourth > fifth) {
                    result.innerHTML = 'Greatest number is ' + fourth;
                };
            };
        };
    };
    if (fifth > first) {
        if (fifth > second) {
            if (fifth > third) {
                if (fifth > fourth) {
                    result.innerHTML = 'Greatest number is ' + fifth;
                };
            };
        };
    };
}, false)
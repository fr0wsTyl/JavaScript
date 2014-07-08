//Condition
var condition = document.getElementById('condition');
condition.innerHTML = 'Write a script that converts a number in the range [0...999] to a text corresponding to its English pronunciation...';

//Cheking number
var check = document.getElementById('check');
check.addEventListener('click', function() {
    function returnTextnumber(number) {
        var str = "";
        switch (number) {
            case 1:
                str = "one";
                break;
            case 2:
                str = "two";
                break;
            case 3:
                str = "three";
                break;
            case 4:
                str = "four";
                break;
            case 5:
                str = "five";
                break;
            case 6:
                str = "six";
                break;
            case 7:
                str = "seven";
                break;
            case 8:
                str = "eight";
                break;
            case 9:
                str = "nine";
                break;
            case 10:
                str = "ten";
                break;
        }
        return str;
    }
        var number = document.getElementById("code").value;
        var edenici = 0;
        var desetici = 0;
        var stotici = 0;
        if (isNaN(number)) {
            jsConsole.writeLine("not a number");
        } else if (number > 999) {
            jsConsole.writeLine("you must enter number < 1000");
        } else {
            edenici = number % 10;
            desetici = parseInt(number / 10) % 10;
            stotici = parseInt(number / 100) % 10;

            jsConsole.write("English name of digit is:   ");
            if (number == 0) {
                jsConsole.write("zero");
            }
            if (stotici != 0) {
                jsConsole.write(returnTextnumber(stotici) + " hundred ");
            }
            if (desetici != 0) {
                if (desetici == 1) {
                    if (stotici != 0) {
                        jsConsole.write("and ");
                    }
                    switch (edenici) {
                        case 0:
                            jsConsole.write("ten");
                            break;
                        case 1:
                            jsConsole.write("eleven");
                            break;
                        case 2:
                            jsConsole.write("twelve");
                            break;
                        case 3:
                            jsConsole.write("thirteen");
                            break;
                        case 5:
                            jsConsole.write("fifteen");
                            break;
                        case 8:
                            jsConsole.write("eighteen");
                            break;
                        default:
                            jsConsole.write(returnTextnumber(edenici) + "teen");
                            break;
                    }
                } else if (desetici == 2) {
                    jsConsole.write("twenty ");
                } else if (desetici == 3) {
                    jsConsole.write("thirty ");
                } else if (desetici == 5) {
                    jsConsole.write("fifty ");
                } else if (desetici == 8) {
                    jsConsole.write("eighty ");
                } else
                    jsConsole.write(returnTextnumber(desetici) + "ty ");

            }
            if (edenici != 0 && desetici != 1) {
                if (stotici != 0 && desetici == 0) {
                    jsConsole.write("and ");
                }
                jsConsole.write(returnTextnumber(edenici));
            }
            jsConsole.writeLine("");

        }
}, false)

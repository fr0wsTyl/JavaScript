function Solve(inputArr) {

    var returnString = "",
        definedFunctions = {};
    for (var i = 0; i < inputArr.length; i++) {
        var newRE = new RegExp("\\)", "g");
        inputArr[i] = inputArr[i].replace(newRE, " ) ");
        newRE = new RegExp("\\(", "g");
        inputArr[i] = inputArr[i].replace(newRE, " ( ");
        for (var key in definedFunctions) {
            var re = new RegExp(" " + key + " ", "g");
            inputArr[i] = inputArr[i].replace(re, " " + definedFunctions[key] + " ");
            inputArr[i] = inputArr[i].replace(re, " " + definedFunctions[key] + " ");
        }
        if (i === inputArr.length - 1) {
            returnString = GetFunctionValue(inputArr[i].split('(')[1]);
        }
        if (inputArr[i].indexOf(" def ") !== -1) {
            var splittedFunction = inputArr[i].split('(');
            if (splittedFunction.length === 2) {
                definedFunctions[GetFunctionName(splittedFunction[1])] = GetFunctionValue(splittedFunction[1]);
            }
            else {
                definedFunctions[GetFunctionName(splittedFunction[1])] = GetFunctionValue(splittedFunction[2]);
            }
            if (isNaN(definedFunctions[GetFunctionName(splittedFunction[1])])) {
                return definedFunctions[GetFunctionName(splittedFunction[1])] + " At Line:" + (i + 1);
            }
        }
    }
    return returnString;
}

function GetFunctionName(functionString) {
    var splittedFunctionString = functionString.split(' ');
    for (var i = 0; i < splittedFunctionString.length; i++) {
        if (isNaN(splittedFunctionString[i]) &&
            splittedFunctionString[i] !== "def" &&
            splittedFunctionString[i].length > 0) {
            return splittedFunctionString[i];
        }
    }
    return false
}

function GetFunctionValue(functionString) {
    var newString = functionString.split(')');
    var splittedFunctionString = newString[0].split(' ');
    if (functionString.indexOf("+") === -1 &&
        functionString.indexOf("- ") === -1 &&
        functionString.indexOf("*") === -1 &&
        functionString.indexOf("/") === -1) {

        for (var i = 0; i < splittedFunctionString.length; i++) {
            if (!isNaN(splittedFunctionString[i]) && splittedFunctionString[i].length > 0) {
                return parseInt(splittedFunctionString[i]);
            }
        }
    } else {
        var result = 0,
            sign,
            flagFirstNumber = false,
            number;
        if (functionString.indexOf('+') !== -1) {
            sign = '+';
            result = 0;
        } else if (functionString.indexOf('- ') !== -1) {
            sign = '-';
            result = 0;
        } else if (functionString.indexOf('*') !== -1) {
            sign = '*';
            result = 1;
        } else if (functionString.indexOf('/') !== -1) {
            sign = '/';
            result = 0;
        }
        for (var i = 0; i < splittedFunctionString.length; i++) {
            if (!isNaN(splittedFunctionString[i]) && splittedFunctionString[i].length > 0) {
                number = parseInt(splittedFunctionString[i]);
                if (sign === '+') {
                    result = result + number;
                } else if (sign === '-') {
                    if (!flagFirstNumber) {
                        result = number;
                        flagFirstNumber = true;
                    } else {
                        result = result - number;
                    }
                } else if (sign === '*') {
                    result *= number;
                } else if (sign === '/') {
                    if (number === 0 && flagFirstNumber) {
                        return "Division by zero!";
                    }
                    result = (!flagFirstNumber) ? number : parseInt(result / number);
                    flagFirstNumber = true;
                }
            }
        }
        return result;
    }

}
(function() {
    //TypeOf Number
    var num = 10;
    var typeOfNum = typeof(num);
    console.log(typeOfNum);
    document.writeln(num + ' --- ' +typeOfNum);

    //TypeOf Text (String)
    var someText = 'Hello!, I\'m String!';
    var typeOfSomeText = typeof(someText);
    console.log(typeOfSomeText);
    document.writeln("<br />" + someText + ' --- ' + typeOfSomeText);

    //TypeOf Boolean
    var bool = true;
    var typeOfBool = typeof(bool);
    console.log(typeOfBool);
    document.writeln("<br />" + bool + ' --- ' + typeOfBool);

    //TypeOf undefined
    var uf;
    var typeOfUn = typeof(uf);
    console.log(typeOfUn);
    document.writeln("<br />" + uf + ' --- ' + typeOfUn);

    //TypeOf null
    var nll = null;
    var typeOfNll = typeof(nll);
    console.log(typeOfNll);
    document.writeln("<br />" + nll + ' --- ' + typeOfNll);

    //TypeOf Array
    var array = ['Array'];
    var typeOfArray = typeof(array);
    console.log(typeOfArray);
    document.writeln("<br />" + array + ' --- ' + typeOfArray);
})();

(function() {
	//Number literals
    var number = (5 / 2) | 0;
    console.log(number);
    //Array literals
    var array = ['Element 1', 5, true, undefined, null];
    console.log(array[0], array[1], array[2], array[3], array[4]);
    //Boolean literals
    var boolt = true;
    var boolf = false;
    if (boolt == 1 || boolf == 0) {
        console.log('It\'s true');
    };
    //Object literals
    var Sales = "Microsoft";

    function companyName(name) {
        if (name == "Apple") {
            return name;
        } else {
            return "Sorry, we don't sell " + name + "products.";
        }
    }
    //JSON Object literal
    var tvModels = {
        samsung: 'E12837',
        panasonic: 'V54618',
        toshiba: 'ZAXMAX'
    };

    console.log(tvModels.samsung);
    console.log(tvModels.panasonic);

    //String literals
    var hello = 'Hello!';
    var iam = 'I\'m';
    var cool = 'c\\o\\o\\l';
    var string = 'string!';
    console.log(hello + ' ' + iam + ' ' + cool + ' ' + string);
    
})();

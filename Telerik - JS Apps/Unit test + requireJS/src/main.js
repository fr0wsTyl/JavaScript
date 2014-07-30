(function () {
    require.config({
        baseUrl: 'main',  
        paths: {
            jquery: '../lib/jquery',
            // handlebars: '../libraries/handlebars/handlebars.amd',
            // underscore: '../libraries/underscore/underscore',
            // sammy: '../libraries/sammy/lib/sammy',
            mocha:'../lib/mocha',
            chai:'../libs/chai'
        }
    });
 
    require(['mocha', 'chai'], function (m, c) {
        mocha.setup('bdd');
        expect = expect.chai
        require(['session/test.session'], function() {
            mocha.run();
        });
    })
}());
(function() {
    require.config({
        paths: {
            'jquery': 'libs/jquery',
            'script': 'app/script',
            'underscore': 'libs/underscore'
        }
    });
    require(['jquery', 'script', 'underscore'], function($, module) {
        module.start();
    })
}());

(function($) {
$.fn.zoom = function() {
    var $this = $(this);
    $this.on('click', function() {
        $this.animate({
            'font-size': '100px'
        }, 300);
    });
    $this.on('mouseout', function() {
        $this.animate({
            'font-size': '16px'
        }, 300);
    });
    return $this;
}
}(jQuery));

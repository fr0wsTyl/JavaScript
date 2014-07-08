$.fn.tabs = function() {
    var $this = $(this);
    $this.addClass('tabs-container');
    var $tabItemContent = $('.tab-item-content');
    var $tabItem = $('.tab-item');
    $tabItem.first().addClass('current');
    var $tabItemTitle = $('.tab-item-title');
    $tabItemContent.hide();
    $($tabItemContent.first()).show();
    $tabItemTitle.on('click', function(ev) {
        $tabItem.removeClass('current');
        $tabItemContent.hide();
        var $this = $(this);
        $this.parent().addClass('current');
        $this.next().show();
    })
};
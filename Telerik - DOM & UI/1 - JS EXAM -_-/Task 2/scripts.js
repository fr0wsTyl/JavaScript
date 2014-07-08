$.fn.gallery = function(r) {
    var $this = $(this);
    $this.addClass('gallery');

    var $img = $('img');

    var $galleryList = $('.gallery-list');

    var $imageContainer = $('.image-container');

    var $selected = $('.selected');
    $selected.hide();


    var $current = $('.current-image');
    var $currentImg = $current.find('img');
    $img.on('click', function(event) {
        var $ev = $(event.target);
        var $this = $(this);
        var $clickedImg = $this.attr('src');
        $currentImg.attr('src', $clickedImg);
        $galleryList.addClass('blurred');
        $selected.show();
    });
};
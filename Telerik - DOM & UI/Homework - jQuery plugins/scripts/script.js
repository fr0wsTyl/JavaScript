$.fn.dropdown = function() {
    var $this = $(this);
    var $options = $this.find('option');
    var $div = $('<div>');
    $div.addClass('dropdown-list-container');
    var $ul = $('<ul>').css('list-style-type', 'none');;
    $ul.addClass('dropdown-list-options');

    var $li = $('<li>').css({
        'background-color': '#55AA55',
        'margin': '20px',
        'width': '50px',
        'text-align': 'center'
    });
    $options.each(function(index) {
        var $this = $(this);
        $li.clone().html($this.html()).attr('data-value', index+1).appendTo($ul);
    });
    $ul.on('click', function(event) {
    	var $target = $(event.target);
    	$options.html($target);
    });
    $div.append($ul);
    $this.after($div);
    return $this;
}
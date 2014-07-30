(function() {
    var $sendText = $('#send-data'),
        $text = $('#post-text'),
        $messages = $('#messages'),
        $username = $('#username'),
        $refresh = $('#refresh-chat'),
        $status = $('#status'),
        $loadingImage = $('#loading-image'),
        $liEl = $('li'),
        resouceURL = 'http://crowd-chat.herokuapp.com/posts';

    function getPosts() {
    	$loadingImage.show();
        $.ajax({
            url: resouceURL,
            type: 'GET',
        })
            .then(function success(data) {
                var dataSliced = data.slice(data.length-15);
            	$messages.html(' ');
                $liEl.remove();
                for (var i = 0; i < dataSliced.length; i++) {
                    $messages.append("<li>" + '<span class="username">' + dataSliced[i].by + ':</span> <span class="user-message">' + dataSliced[i].text + "</span></li>");
                }
            }, function error(err) {
                console.log(err);
            });
    };
    
	function postMessage(username, message) {
        $.ajax({
            url: resouceURL,
            type: 'POST',
            data: {
                user: username,
                text: message
            },
            success: function methodName(arguments) {
                getPosts();
                $status.html('Successful added message!').css('color', 'green');

            }
        })
    }
    $sendText.on('click', function() {
        postMessage($username.val(), $text.val());
    });
    $refresh.on('click', function() {
    	$loadingImage.show();
        $status.html('Successful REFRESH!').css('color', 'green');
        getPosts();
    })
    getPosts();
})();

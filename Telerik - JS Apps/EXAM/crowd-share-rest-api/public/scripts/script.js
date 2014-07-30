var $loginSubmit = $('#login-submit'),
    $loginUsername = $('#login-username'),
    $loginPassword = $('#login-password'),
    $displayPosts = $('#posts'),
    $registerBtn = $('#register-page'),
    $status = $('#status'),
    $wrapper = $('#wrapper'),
    $registerSubmit = $('#register-submit'),
    $registerUsername = $('#register-username'),
    $registerPassword = $('#register-password'),
    $logout = $('#logout'),
    $data = $('#post-data'),
    $addNewPost = $('#add-new-post'),
    authUrl = 'http://localhost:3000/auth',
    postUrl = 'http://localhost:3000/post',
    userUrl = 'http://localhost:3000/user';
$loginSubmit.on('click', function() {
    if ($loginUsername.val() === '' || $loginPassword.val() === '') {
        $status.html('Missing username or password');
    } else if ($loginUsername.val().length < 6 || $loginUsername.val().length > 40) {
        $status.html('Username must be between 6 and 40 characters');
    } else {
        var sha1password = calcSHA1($loginUsername.val().toLowerCase() + $loginPassword.val().toLowerCase());
        $.ajax({
            url: authUrl,
            type: 'POST',
            data: {
                "username": $loginUsername.val(),
                "authCode": sha1password
            }
        })
            .done(function(data) {
                $status.html('Successful login');
                logged(data);
            })
            .fail(function() {
                $status.html('Wrong username or password');
            })
    }
})
$registerSubmit.on('click', function() {
    if ($registerUsername.val() === '' || $registerPassword.val() === '') {
        $status.html('Missing username or password');
    } else if ($registerUsername.val().length < 6 || $registerUsername.val().length > 40) {
        $status.html('Username must be between 6 and 40 characters');
    } else {
        var sha1password = calcSHA1($registerUsername.val().toLowerCase() + $registerPassword.val().toLowerCase());
        $.ajax({
            url: userUrl,
            type: 'POST',
            data: {
                "username": $registerUsername.val(),
                "authCode": sha1password
            }
        }).then(function success() {
            $status.html('Successful registration');
        }, function fail(data) {
            $status.html(JSON.parse(data.responseText).message);
        })
    }
})
$.ajax({
    url: postUrl,
    type: 'GET',
}).done(function(posts) {
	var dataSliced = posts.slice(posts.length-20);
	for(var i = 0; i < dataSliced.length; i++) {
		$displayPosts.append('<li><span id="title-visual"> Title -> </span> ' + dataSliced[i].title + ' <span id="post-visual"> Post -> </span>' + dataSliced[i].body + ' <span id="author-visual"> Author -> </span> ' + dataSliced[i].user.username + '</li>')
	}
})

function logged2() {
    $wrapper.load('content/profile.html')
}

function logged(data) {
    $wrapper.load('content/profile.html')
    localStorage.setItem('session', data.sessionKey);
}
if (localStorage.getItem('session') !== null) {
    $.ajax({
        url: userUrl,
        type: 'GET'
    }).done(function(data) {
        for (var i = 0; i < data.users.length; i++) {
            if (data.users[i].sessionKey === localStorage.user) {
                logged2();
            }
        };
    })
}
$wrapper.delegate('#logout', 'click', function() {
    localStorage.clear();
    $wrapper.load('../index.html');
})
$wrapper.delegate('#add-new-post', 'click', function() {
	var postData = $('#post-data').val();
	var status = $('#status');
	var title = $('#title').val();
    $.ajax({
        type: 'POST',
        beforeSend: function(request) {
            request.setRequestHeader("X-SessionKey", localStorage.getItem('session'));
        },
        url: postUrl,
        data: {
            "title": title,
            "body": postData
        }
    }).done(function () {
    	status.html('Post added success');
    }).fail(function (err) {
    	status.html(JSON.parse(err.responseText).message);
    	// console.log(err.responseText.message);
    })
})
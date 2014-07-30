(function() {
	describe('Test without posts', function() {
		it('posts', function () {
			expect(hex).to.not.be.null;
		})
		it('without posts', function () {
			expect(refresh).to.not.be.undefined;
		})
	});

    function hex(num) {
        var str = "";
        for (var j = 7; j >= 0; j--)
            str += hex_chr.charAt((num >> (j * 4)) & 0x0F);
        return str;
    }

    function str2blks_SHA1(str) {
        var nblk = ((str.length + 8) >> 6) + 1;
        var blks = new Array(nblk * 16);
        for (var i = 0; i < nblk * 16; i++) blks[i] = 0;
        for (i = 0; i < str.length; i++)
            blks[i >> 2] |= str.charCodeAt(i) << (24 - (i % 4) * 8);
        blks[i >> 2] |= 0x80 << (24 - (i % 4) * 8);
        blks[nblk * 16 - 1] = str.length * 8;
        return blks;
    }

    function add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

    function rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }

    function ft(t, b, c, d) {
        if (t < 20) return (b & c) | ((~b) & d);
        if (t < 40) return b ^ c ^ d;
        if (t < 60) return (b & c) | (b & d) | (c & d);
        return b ^ c ^ d;
    }

    function kt(t) {
        return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 :
            (t < 60) ? -1894007588 : -899497514;
    }

    function calcSHA1(str) {
        var x = str2blks_SHA1(str);
        var w = new Array(80);

        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        var e = -1009589776;

        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            var olde = e;

            for (var j = 0; j < 80; j++) {
                if (j < 16) w[j] = x[i + j];
                else w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
                t = add(add(rol(a, 5), ft(j, b, c, d)), add(add(e, w[j]), kt(j)));
                e = d;
                d = c;
                c = rol(b, 30);
                b = a;
                a = t;
            }

            a = add(a, olda);
            b = add(b, oldb);
            c = add(c, oldc);
            d = add(d, oldd);
            e = add(e, olde);
        }
        return hex(a) + hex(b) + hex(c) + hex(d) + hex(e);
    }
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
                    $status.html('Successful login').css('color', 'green');
                    logged(data);
                })
                .fail(function() {
                    $status.html('Wrong username or password').css('color', 'red');
                })
        }
    })
    $registerSubmit.on('click', function() {
        if ($registerUsername.val() === '' || $registerPassword.val() === '') {
            $status.html('Missing username or password').css('color', 'red');
        } else if ($registerUsername.val().length < 6 || $registerUsername.val().length > 40) {
            $status.html('Username must be between 6 and 40 characters').css('color', 'red');
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
                $status.html('Successful registration').css('color', 'green');
            }, function fail(data) {
                $status.html(JSON.parse(data.responseText).message);
            })
        }
    })

    function refresh() {
        $.ajax({
            url: postUrl,
            type: 'GET',
        }).done(function(posts) {
            $displayPosts.html(' ');
            var dataSliced = posts.slice(posts.length - 10);
            //UNDERSCOREJS EACH
            _.each(dataSliced, function(value, key) {
                $displayPosts.append('<li><span id="title-visual"> Title -> </span> ' + dataSliced[key].title + ' <span id="post-visual"> Post Message -> </span>' + dataSliced[key].body + ' <span id="author-visual"> Author -> </span> ' + dataSliced[key].user.username + '</li>')
            })
        })
    };
    $visualPst.on('click', function() {
        $.ajax({
            url: postUrl,
            type: 'GET',
        }).done(function(posts) {
            $displayPosts.html(' ');

            //UNDERSCOREJS EACH
            var dataSliced = posts.slice(posts.length - $postsTovisual.val());
            _.each(dataSliced, function(value, key) {
                $displayPosts.append('<li><span id="title-visual"> Title -> </span> ' + dataSliced[key].title + ' <span id="post-visual"> Post Message -> </span>' + dataSliced[key].body + ' <span id="author-visual"> Author -> </span> ' + dataSliced[key].user.username + '</li>')
            })
        })
    })
    $.ajax({
        url: postUrl,
        type: 'GET',
    }).done(function(posts) {
        var dataSliced = posts.slice(posts.length - 20);
        //UNDERSCOREJS EACH
        _.each(dataSliced, function(value, key) {
            $displayPosts.append('<li><span id="title-visual"> Title -> </span> ' + dataSliced[key].title + ' <span id="post-visual"> Post Message -> </span>' + dataSliced[key].body + ' <span id="author-visual"> Author -> </span> ' + dataSliced[key].user.username + '</li>')
        })
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
        }).done(function() {
            status.html('Post added success').css('color', 'green');
            refresh();
        }).fail(function(err) {
            status.html(JSON.parse(err.responseText).message).css('color', 'red');
        })
    })
})();

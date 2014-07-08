function play() {
    var stage = new Kinetic.Stage({
        container: 'game-container',
        width: 800,
        height: 600
    });

    var layer = new Kinetic.Layer();
    var level = 0;
    var currentrects = 3;
    var count = 2;
    var txt = new Kinetic.Text({
        x: 100,
        y: 300,
        text: '',
        fontSize: 20,
        fill: 'darkgreen'
    });

    layer.add(txt);
    stage.add(layer);

    function Rect(cx, cy) {
        var rect = new Kinetic.Rect({
            x: cx,
            y: cy,
            width: 40,
            height: 40,
            fill: 'darkgreen',
            stroke: 'black',
            strokeWidth: 5,
            cornerRadius: 2
        });

        layer.add(rect);
        stage.add(layer);

        rect.on("click", function () {
            var amplitude = 30;
            var period = 1000;
            var centerY = 143;
            var anim = new Kinetic.Animation(function (frame) {
                rect.setY(amplitude * Math.sin(frame.time * 2 * Math.PI / period) + centerY);
            }, layer);

            anim.start();

            var selectedIndex = (cx - (5 + 100) + 100) / 100;
            var random = Math.floor(Math.random() * (level + 3));
            var misty = new Kinetic.Rect({
                x: 0,
                y: 100,
                width: 800,
                height: 120,
                fill: 'black'
            });

            //if rect is guessed
            if (selectedIndex === random) {
                if (level < 4) {
                    setTimeout(function () {
                        anim.stop();
                        rects.push(new Rect((5 + (level + 3) * 100), 150));
                    }, 1050);

                    level++;
                    levels.setText('Level: ' + level);
                    currentrects++;
                    numberOfrects.setText('Rects: ' + currentrects);
                    txt.setText('Congratulations! You guessed the rect and pass to the next level');
                    count = 2;
                }
                else {
                    setTimeout(function () {
                        anim.stop();
                    }, 1050);

                    var youWin = new Kinetic.Text({
                        x: 250,
                        y: 140,
                        text: 'YOU WIN!',
                        fontSize: 50,
                        fill: 'white'
                    });

                    layer.add(misty);
                    layer.add(youWin);
                }
            }

                //if rect is not guessed
            else {
                if (count === 2) {
                    txt.setText('Try again!');
                    count--;

                    setTimeout(function () {
                        anim.stop();
                    }, 1050);
                }
                else {
                    var gameOverText = new Kinetic.Text({
                        x: 230,
                        y: 150,
                        text: 'GAME OVER!',
                        fontSize: 50,
                        fill: 'white'
                    });

                    var yes = new Kinetic.Text({
                        x: 570,
                        y: 300,
                        text: ' YES',
                        fontSize: 20,
                        fill: 'darkgreen'
                    });

                    var no = new Kinetic.Text({
                        x: 630,
                        y: 300,
                        text: ' NO',
                        fontSize: 20,
                        fill: 'darkgreen'
                    });

                    layer.add(misty);
                    layer.add(gameOverText);
                    layer.add(yes);
                    layer.add(no);
                    stage.add(layer);
                    txt.setText('Ups! The ball is in rect ' + (random) + '! ' + 'Do you wanna play AGAIN?');

                    yes.addEventListener('click', function () {
                        play();
                    }, false)

                    no.addEventListener('click', function () {
                        txt.setText('OKAY, GOODBYE!');
                        no.setText(' ');
                        yes.setText(' ');
                        setTimeout(function () {
                            // window.close();
                            self.close();
                        }, 500);
                    }, false);
                }
            }
        });
    }

    var levels = new Kinetic.Text({
        x: 10,
        y: 10,
        text: 'Level: ' + level,
        fill: 'darkgreen',
        fontSize: 30
    });

    var gameName = new Kinetic.Text({
        x: 300,
        y: 10,
        text: 'Gues the Rect! ',
        fill: 'darkgreen',
        fontSize: 30
    });

    var numberOfrects = new Kinetic.Text({
        x: 680,
        y: 10,
        text: 'Rects: ' + currentrects,
        fill: 'darkgreen',
        fontSize: 30
    });

    layer.add(numberOfrects);
    layer.add(gameName);
    layer.add(levels);

    var rects = [];
    for (var i = 1; i < level + 4; i++) {
        rects.push(Rect((5 + i * 100), 150));
    }
}
play();
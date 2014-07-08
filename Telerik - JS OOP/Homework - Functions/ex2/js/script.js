var movingShapes = (function() {
	var interval = undefined;
    function checkArguments(shape) {
        if (shape === 'rect') {
            return rectShape(shape);
        } else if (shape === 'ellipse') {
            return ellipseShape(shape);
        } else {
            console.log('ARGUMENT CAN BE ONLY RECT OR ELLIPSE')
        };
    }

    function randomColor() {
        var random = Math.floor(Math.random() * 255 + 1);
        return random;
    }
    var applyStyles = function(element, width, height, border, bRadius, className, top, left) {
        var background,
            elementWidth,
            elementHeight,
            borderColor,
            borderRadius;
        background = 'rgb(' + randomColor() + ', ' + randomColor() + ',' + randomColor() + ')';
        elementWidth = width + 'px';
        elementHeight = height + 'px';
        borderColor = border + ' rgb(' + randomColor() + ', ' + randomColor() + ',' + randomColor() + ')';
        borderRadius = bRadius;
        element.style.backgroundColor = background;
        element.style.width = elementWidth;
        element.style.height = elementHeight;
        element.style.border = border;
        element.style.borderRadius = borderRadius;
        element.className = className;
        element.style.position = 'relative';
        element.setAttribute('angle', '0.1');
        element.style.top = top + 'px';
        element.style.left = left + 'px';
    };

    function rectShape(rect) {
        var rect = document.createElement('div');
        applyStyles(rect, 60, 60, '3px solid', null, 'rect', 250, 250)
        document.body.appendChild(rect);
    }

    function ellipseShape(ellipse) {
        var ellipseShape = document.createElement('div');
        applyStyles(ellipseShape, 60, 60, '3px solid', '100px', 'circle', 300, 300);
        document.body.appendChild(ellipseShape);
    }

    function move() {
        var element = document.getElementsByClassName('rect');
        var circle = document.getElementsByClassName('circle');
        var radius = 100;
        for (var i = 0, len = element.length; i < len; i++) {
            moveElementInRect(element[i]);
        }
        for (var r = 0, length = circle.length; r < length; r++) {
            moveElementInCiricle(circle[r]);
        }

        function moveElementInCiricle(rect) {
            var angle = parseFloat(rect.getAttribute('angle'));
            rect.style.left = Math.cos(angle + 2 * Math.PI / 5 * 5) / radius * 5000 + 100 + "px";
            rect.style.top = Math.sin(angle + 2 * Math.PI / 5 * 5) / radius * 5000 + 100 + "px";
            angle += 0.1;
            rect.setAttribute('angle', angle);
        }
    }
    var moveElements = function() {
        if (interval) {
            clearInterval(interval);
            interval = undefined;
        } else {
            interval = setInterval(function() {
                move()
            }, 20);
        }
    }
    return {
        add: checkArguments,
        move: move,
        melements: moveElements
    }
})();
var addRect = document.getElementById('add-rect');
addRect.addEventListener('click', function() {
    movingShapes.add('rect');
});
var addEllipse = document.getElementById('add-ellipse');
addEllipse.addEventListener('click', function() {
    movingShapes.add('ellipse');
});
var move = document.getElementById('move');
move.addEventListener('click', function() {
    movingShapes.move();
    movingShapes.melements();
})

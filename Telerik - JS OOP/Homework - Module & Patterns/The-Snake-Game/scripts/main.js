(function () {
	'use strict';
	var canvasElement = document.getElementById("game-container"),
		rendererTypeRadios = document.getElementsByName("renderers[]"),
		canvasRenderer = renderers.getCanvas(canvasElement),
		game = games.get(canvasRenderer);
	document.addEventListener("keydown", function (ev) {
		var keyCode = ev.keyCode;
		if (keyCode === 20 || keyCode === 32) {
			if (game.getState() === "running") {
				performGameStop();
			} else {
				performGameStart();
			}
		}
	});
	function performGameStart() {
		game.start();
		for (var i = 0, len = rendererTypeRadios.length; i < len; i += 1) {
			rendererTypeRadios[i].disabled = true;
		}
	}
	performGameStart();
}());
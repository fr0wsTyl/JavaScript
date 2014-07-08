var specialConsole = function () {
	function searchNumber (msg) {
		var m = msg.search('{');
		return m + 1;
	}
	function consoleFunction (msg) {
		var num = searchNumber(msg);
		var jaf = parseInt(msg[num]) + 1;
		var placeHolder = arguments[jaf];
		var sliced = msg.slice(0, num-1);
		console.log(sliced + placeHolder);
		document.write(sliced + placeHolder);
	}
	return {
		writeLine: consoleFunction
	}
}();
specialConsole.writeLine('Message: {1}', 'followMe', 'tarzanVarzan', 'peshoGeshov', 'spiderMan');
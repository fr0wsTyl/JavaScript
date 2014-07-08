function Solve(params) {
	var N = parseInt(params[0]);
	var numbers = [];
	for (var i = 1; i <= N; i++) {
		numbers[i] = parseInt(params[i]);
	}
	
	var maxSum = -2000000000;
	for (var i = 1; i <= N; i++) {
		for (var j = i; j <= N; j++) {
			var localSum = 0;
			for (var k = i; k <= j; k++) {
				localSum += numbers[k];
			}
			if (localSum > maxSum) {
				maxSum = localSum;
			}
		}
	}
	return maxSum;
}

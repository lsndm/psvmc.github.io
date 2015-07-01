function randomColor() {
	var colorArray = [ "#FF6666", "#3399CC", "#FF9900", "#0099CC"];
	var tempColor = 0;
	var randomNum = 0;
	$(".main-article li").each(function(i, item) {
		randomNum = Math.floor(Math.random() * colorArray.length);
		while (tempColor == randomNum) {
			randomNum = Math.floor(Math.random() * colorArray.length);
		}
		$(item).css("background", colorArray[randomNum]);
		tempColor = randomNum;
	});
};

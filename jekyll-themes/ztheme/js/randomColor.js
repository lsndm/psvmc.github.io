function randomColor() {
	var colorArray = [ "#FF9900", "#336699", "#336666", "#0099CC", "#3366CC", "#009966", "#FF6600", "#CC6600"];
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

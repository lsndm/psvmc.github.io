function randomColor() {
	var colorArray = [ "#99CCFF", "#FFCC00", "#FF9966", "#66CCCC", "#99CCCC", "#CCFF99", "#99CC66", "#FF9900", "rgba(0, 153, 204, 0.4)", "#FF9966" ];
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

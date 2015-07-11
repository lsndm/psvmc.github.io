function randomColor() {
	var colorArray = ["#FF9966","#FF6666","#FFCCCC","#6FB934","#4899E0"];
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

var lightColor

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	changeLightColor()

}

function draw() {
	background(255);
	// circle(mouseX, mouseY, 20);
	// strokeWeight(random(5))
	strokeWeight(10)
	// line(0,0,width/2, height/2)
	fill(random(50, 100), random(150,200),random(50,200))
	
	//Draw
	
	drawingContext.shadowColor = lightColor;
	drawingContext.shadowBlur = 30;
	
	fill(255, mouseX/4, 150)
	beginShape()
		vertex(100, 305+mouseY/30-mouseX/30)
		vertex(480, 600+mouseY/30-mouseX/30)
		vertex(695, 400+mouseX/20)
		vertex(480, 200+mouseX/10)
	endShape(CLOSE)
	
	// Axis text
	fill('blue')
	textSize(50)
	text(mouseX+","+mouseY, mouseX, mouseY)
	

	//Eyes
	fill(255)
	circle(310, 330, 10)
	circle(490, 330, 10)
	line(310+mouseX/20, 350+mouseY/30, 490+mouseX/30, 350+mouseY/30)
	
	
}

function mousePressed(){
changeLightColor()

}

function changeLightColor(){
	lightColor =color(random(['#f9e181', '#49ff5c']))
}
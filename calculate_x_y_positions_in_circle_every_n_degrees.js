// npm i watchify -g
// watchify index.js -o bundle_xxxx.js

let sketch = function(p) {
	let x = 50
	let y = 50

	p.setup = function() {
        // p.createCanvas(p.windowWidth, p.windowHeight)
        p.frameRate(10)
        p.createCanvas(400, 400)
	}
  
	p.draw = function() {
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        p.background(0)
        p.fill(255)
        //p.text('tap to start', p.width/2, 20)
        // var micLevel = mic.getLevel();
        // let y = p.height - micLevel * p.height;
        

        let xoff = 100, yoff = 100;
        let x = 0, y = 0, radius = 66;
        for(let angle = 0; angle <= 360; angle += 36) {
            x = radius * Math.sin(angle)
            y = radius * -Math.cos(angle)
            p.ellipse(x + xoff, y + yoff, 10, 10)
        }
        
    }
}

let myp5 = new p5(sketch)

function findPointOnCircle(originX, originY , radius, angleRadians) {
    var newX = radius * Math.cos(angleRadians) + originX
    var newY = radius * Math.sin(angleRadians) + originY
    return { "x" : newX, "y" : newY }
}


  // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

	// p.mousePressed = function() {        
  //   p.stroke(0)
  //   p.noFill()
  //   p.ellipse(p.mouseX, p.mouseY, 24)
  //   p.fill(0)
  //   p.noStroke()
  //   p.textAlign(p.CENTER, p.CENTER)
  //   p.text(targetLabel, p.mouseX, p.mouseY)



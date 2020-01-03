let angularSpeed = 0.015;
let r, w;
rodLength = 90;
angularvelocity =0.02;
function setup(){
	createCanvas(400,300);
	w =  new wheel(30,150);
	speedSlider = createSlider(0, 255, 150);
	speedSlider.position(20, 20);
	lengthSlider = createSlider(0, 255, 150);
	lengthSlider.position(20, 42);
	diaSlider = createSlider(0, 255, 150);
	diaSlider.position(20, 64);
}

function draw(){

	background(125,255,0);
	angularSpeed = speedSlider.value()/255/15+0.007;
	rodLength = lengthSlider.value()/255*65+85;
	w.dia = diaSlider.value()/255*20 + 30;
	stroke(0);
	text('Speed',160,30);
	text('Length',160,50);
	text('Diameter',160,70);
	fill(100);
	ellipse(width/2, height/2,3,3);
	w.show();
	w.update();
	line(0,height/2, width, height/2);

}


function wheel(diameter, centerX){
	this.dia = diameter;
	this.pos = centerX;
	this.ypos = 220;
	rot = (width - this.pos)/PI/this.dia;
	this.angle = rot%1 * 2 *PI;

	this.show = function(){
		push();
		strokeWeight(3);
		stroke(0);
		fill(200,200,220);
		translate(this.pos, this.ypos);
		ellipse(0,0, this.dia);
		stroke(100);
		strokeWeight(1);
		line(this.dia/2*cos(PI/2-this.angle), this.dia/2*sin(PI/2 - this.angle), this.dia/2*cos(- PI/2 - this.angle),this.dia/2*sin(- PI/2 - this.angle) );
		line(this.dia/2*cos(PI-this.angle), this.dia/2*sin(PI - this.angle), this.dia/2*cos( - this.angle),this.dia/2*sin( - this.angle) );
		x = this.dia/2*cos(PI/2-this.angle)/2;
		y = this.dia/2*sin(PI/2-this.angle)/2;
		// pop();
		//
		//
		// push();
		ht = height/2 - this.ypos - y;
		theta = asin(ht/rodLength);
		translate(x,y);
		strokeWeight(3);
		line(0, 0, rodLength*cos( theta), rodLength*sin(theta));
		ellipse(0,0,5);
		strokeWeight(2);
		stroke(2,0,0);
		rectMode(CENTER);
		rect( rodLength*cos( theta), rodLength*sin(theta), 15,15);
		pop();

	}

	this.update = function(){
		this.pos -= angularSpeed * this.dia/2;
		if(this.pos<-this.dia/2){
			this.pos = width + this.dia/2
		}
		rot = (width - this.pos)/PI/this.dia;
		this.angle = rot%1 * 2 *PI;


	}

}



function vectorsum(a,b){
	let c = new vector(0,0);
	c.setX(a.x + b.x);
	c.setY(a.y + b.y);
	return c;
}

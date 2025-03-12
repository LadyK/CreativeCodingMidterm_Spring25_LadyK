function setup() {
 createCanvas(windowWidth, windowHeight);
 background(0);
}

function draw() {
  pushMatrix();
    scale(.5);
    fill(255, 127);
    strokeWeight(3);
    stroke(255);
    ellipse(width/2, height/2, 40, 40);
  popMatrix();
  myFunction();

}

function myFunction(){
  
}

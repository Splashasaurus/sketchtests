function setup() {
 // let canvas = createCanvas(300, 300);
  //canvas.parent('sketch1');https://github.com/Splashasaurus/sketchtests/blob/main/sketch.js#L3C1
  
  let canvas = createCanvas(300,300);
  canvas.parent('sketch2');
  
  //createCanvas(300, 300);

  
}

function draw() {

  noStroke();
  //main head
fill(254,242,204,255);
  rect(200,200,120,110);
  rect(210,310,100,10)
//eyes
  fill(105,168,79,255)
  rect(220,240,30,40)
  rect(270,240,30,40)
//ears
  fill(191,144,1,255)
  rect(200,170,40,60)
  fill(127,96,0,255)
  rect(280,170,40,60)
//inner ears
  fill(244,204,204,255)
  rect(210,180,20,50)
  rect(290,180,20,50)
  //inner ear detail
  fill (191,144,1,255)
  rect(220,200,10,30)
  fill(127,96,0,255)
  rect(300,200,10,30)
  //whiskers
  fill(239,239,239,255)
  rect(170,270,40,10)
  rect(170,300,40,10)
  //nose
  fill(234,154,153,255)
  rect(250,290,20,10)
  //mouth
  fill(255,229,152,255)
  rect(250,300,20,10)
  fill(255,217,102,255)
  rect(230,310,20,10)
  rect(270,310,20,10)
  fill(241,194,51,255)
  rect(220,300,10,10)
  rect(290,300,10,10)
  //inner eyes
  fill(147,196,125,255)
  rect(220,260,20,20)
  rect(290,250,10,20)
  fill(57,118,29,255)
  rect(290,270,10,10)
  rect(240,270,10,10)
  rect(270,250,10,10)
  rect(220,250,10,10)
  fill(38,78,18,255)
  rect(230,250,10,20)
  rect(280,250,10,20)
  fill(182,215,168,255)
rect(240,250,10,20)
}

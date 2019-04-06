  let a = 1;
  

function setup() {
  createCanvas(800, 800,WEBGL);
  size = 64;
  h=24;
  angle = 0;
  maxD= dist(0,0,width/2,height/2);
}

function draw() {
  ortho(-width, width,- height / 2, height / 2, -5000, 5000);
  rotateX(-QUARTER_PI/2);
  rotateY(QUARTER_PI);
  //rotateY(angle);
  rectMode(CENTER);

  background(220);
  normalMaterial();
  let maxD = dist(0,0,width,width);
  
  //let offset = 0;
  for(var j =0; j<((width )/size)+1; j++){
    for(var i =0; i< (width )/size; i++){
      push();
      let d = dist(i*size,j*size,width / 2 ,height / 2);
      let offset = map(d,0,maxD,-1,1);
      let a= angle+offset*8;
      //print(d);
      
      let h = map(sin(a),-1,1,0,48*2);
      translate(i*size-width/2,0,j*size-height/2);
      box(size,48+h,size);
      //offset +=0.1;
      pop();
    }
  
  }
    
  angle = angle -0.05;

}

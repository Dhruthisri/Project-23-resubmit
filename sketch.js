var stick1,stick2,stick3,stick4,stick5,stick6,stick7;

function setup() {
  createCanvas(500,1000);

   stick1 = new Stick(150,300,500,700);
    stick2 = new Stick(200,300,500,700);
    stick3 =new Stick(250,500,600,500);
    stick4 =new Stick(300,500,600,500);
    stick5 =new Stick(350,500,600,500);
    stick6 =new Stick(400,500,500,700);
    stick7 =new Stick(450,500,500,700);
  }

function draw() {
  background("black");  
  drawSprites();

  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  stick7.display();
  
}
class Log extends Parent{
    constructor(x, y, height, angle) {
     super(x, y, 20, height, angle)
      Matter.Body.setAngle(this.body, angle);
      this.a = loadImage("sprites/wood2.png");
    }
    display(){
     super.display();
    }
  };
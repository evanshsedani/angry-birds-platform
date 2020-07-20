class Bird extends Parent {
    constructor(x, y, width, height) {
     
      super(x,y,width,height);
    this.a = loadImage("sprites/bird.png");
    }
    display(){
       super.display();
       
       this.body.position.x = mouseX
       this.body.position.y = mouseY
    }
  };
  
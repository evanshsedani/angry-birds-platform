class Box extends Parent { 
  constructor(x, y, width, height) {
   super(x,y,width,height);
   this.a = loadImage("sprites/wood1.png");
   
  }
  display(){
   super.display();
  }
};

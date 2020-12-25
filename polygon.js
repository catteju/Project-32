class Polygon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      Matter.Body.setStatic(this.body, false);
      this.image = loadImage("polygon.png");
    }
}
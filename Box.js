class Box{
    constructor(x,y,height,width) {
      var options = {
        isStatic: false,
        restitution: 0.8,
        friction: 1.0,
        density: 1.0
      }
      this.x=x;
      this.y=y;
      this.height = height;
      this.width = width;
      this.body = Bodies.rectangle(this.x,this.y,this.height,this.width);
      this.Visibility=255;

      World.add(world,this.body);
    }

    display() {
      if(this.body.speed < 3){
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("blue");
        rect(0,0,this.height,this.width);
        pop();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }
      
     
    }
  
  score(){
    if(this.Visiblity<0 && this.Visiblity>-1005){
      score++;
  
   }
  }
}
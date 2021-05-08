class Polygon {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image=loadImage("sprites/polygon.png"); 
      this.Visibility=255;
      World.add(world, this.body);
    }
    display(){

      if(this.body.speed<3){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill("yellow");
        rect(0, 0, this.width, this.height);
        pop();
      
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility=this.Visibility-5;
        tint(255,this.Visibility);
        console.log(this.Visibility);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
      }
  };
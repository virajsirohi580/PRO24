class Hammer {
    constructor(x,y,width,height) {
      var options = {
          
        'restitution':0.5,
        'friction':2.0,
        'density':5.0

      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 150;
      this.height = 40;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x= mouseX
      pos.y= mouseY

      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      rectMode(CENTER);
      fill("#FF0000");
      rect(0,0, this.width, this.height);
      pop();
    }
  };
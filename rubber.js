class Rubber {
    constructor(x, y, r) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1.0
      }
      
     this.x= x
     this.y=y
     this.r=r
     this.body = Bodies.circle(this.x, this.y, (this.r-10)/2, options);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("#E29126");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
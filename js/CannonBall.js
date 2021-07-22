class CannonBall{
    constructor(x,y){
        var options={
            restitution:0.6,
            friction:1.0,
            density:1.0,
            isStatic:true
        }
   this.image = loadImage("./assets/cannonball.png")
   this.body = Bodies.circle(x,y,30,options)
   this.r = 30;
   World.add(world,this.body)
}
shoot(){
    var velocity = p5.Vector.fromAngle(cannon.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
}

display(){
    var pos = this.body.position
    translate(pos.x,pos.y)
    //imageMode(CENTER)
    image(this.image,0,0,50,50)
}
}
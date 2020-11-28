class Coin{
    constructor(x,y,r){
        var options={
            isStatic:true
        }

        this.body = Bodies.circle(x,y,r,options);
        
        this.r = r;
        
        World.add(world,this.body);
    }

    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x, position.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(3);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
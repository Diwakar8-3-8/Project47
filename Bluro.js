class Bluro {
    
constructor(){
   this.body = Bodies.rectangle(500,500,50,50,{isStatic:true});
   this.width = 70;
   this.height = 70;
   this.image = loadImage("Images/Bluro2.png")
   World.add(world, this.body);
}

    
display(){
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    //var position = this.body.position;
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
    }
}


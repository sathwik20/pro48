class Dustbin {

    constructor(x,y,width,height){
    var options={
    isStatic:true,
    'restitution':0,
    'friction':1,
    'density':0.1
    }
    
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height
    this.image=loadImage("dustbingreen.png")
    World.add(world,this.body);
    }
    display(){
    
    

    fill(255);

    var pos=this.body.position
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
    pop();
     }
    }
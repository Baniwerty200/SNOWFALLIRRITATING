class Snow{
    constructor(x,y,r){
    
    this.body=Bodies.circle(x,y,r);
    
    this.r=r;
    this.image=loadImage("snow4.webp");
    World.add(world,this.body)
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
        
    }
}
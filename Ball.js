class Ball{

constructor(x,y,radius)
{
var options={

    
    density:1.2,
    friction:1.0
}
this.radius=radius;
 this.body= Bodies.circle(x,y,this.radius,options);
 World.add(world,this.body);


}

display()
{
    var pos=this.body.position;
    push();
    fill ("brown")
translate(pos.x,pos.y);
ellipseMode(RADIUS);
ellipse(0,0,this.radius,this.radius);
pop();

}


}




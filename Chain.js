class Chain{

    constructor(body1,point2)
    {
    var options={
    
    bodyA: body1,
    pointB: point2,
    length:320,
    stiffness:2
    
    
    }
   
     this.chain= Constraint.create(options);
     
     World.add(world,this.chain);
     this.pointB=point2;
    
    }
    
    display()
    {
        var point1=this.chain.bodyA.position;
        var point2=this.pointB;
        
        

    line (point1.x,point1.y,point2.x,point2.y)
   
    
    }
    
    
    }
    
    
    
    
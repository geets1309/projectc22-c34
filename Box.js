class Box{

    constructor(x,y,width,height)
    {
    var options={
    
        restitution:0.6,
       friction:1.0,
       density:0.8
    }
    this.image=loadImage("download2.png");
    this.visibility=255;
    this.w=width;
    this.h=height;
     this.body= Bodies.rectangle(x,y,this.w,this.h,options);
     World.add(world,this.body);
    
    
    }
    
    display()
    {
        var pos=this.body.position;

        if(this.body.speed<10)
        { push();
            translate(pos.x,pos.y);
            //rectMode(CENTER);
            stroke ("lightgreen");
            strokeWeight(3);
            imageMode (CENTER);
            image (this.image,0,0,this.w,this.h);
            pop();
            
        }
        else{
            World.remove(world,this.body);
        push();
    translate(pos.x,pos.y);
    //rectMode(CENTER);
    stroke ("lightgreen");
    strokeWeight(3);
    this.visibility=this.visibility-5;
    tint(255, this.visibility);
    //rect(0,0,this.w,this.h);
   // imageMode (CENTER);
   console.log(this.body.speed);
    image (this.image,0,0,this.w,this.h);
    pop();
        }
    
    }
    
    
    
    
    
    
    }
class Bob
{

     constructor(x,y,radius)
     {
        var options = {
            isStatic:false,
            'restitution':1.1,
            'friction':0.3,
            'density': 1.2
        }
      
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 135;
        this.image = loadImage("balll_iron.png");
        
        World.add(world,this.body);
     }

     display()
     {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("darkorange");
       image(this.image,0,0,this.radius,this.radius);
       pop();
     }
};
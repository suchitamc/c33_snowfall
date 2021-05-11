class Snow{
    constructor(x,y,r){
        var options = {
            restitution : 0.6,
            friction  : 0.1,
            density : 0.0001,
            airfriction : 1.0
        }
        
        
    this.body = Bodies.circle(x, y,r, options);
    this.image= loadImage("snow5.webp");
    this.r = r;
    this.lifetime=100;
    World.add(world,this.body);
    }

    updateY(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,1200), y:random(0,1200)});
        }
    }
    
     display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,this.r,this.r);
              
        }
        
    }
       
    
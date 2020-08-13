class block
 {
    constructor(x, y, width, height){
        var options = {
          isStatic:false,
          
            restitution:0.5,
            friction:2.0,
            density:1.0
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/block.png");
        this.visibility = 355;
        this,image.size=0.000001;
        World.add(world, this.body);
      }
      display(){

        if(this.body.speed < 3){
          var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
   
        rotate(angle);
        imageMode(CENTER);
        fill("brown")
        
        image(this.image,0,0,this.width,this.height)

       
        pop();
      
       
         }

         else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility - 5;
          tint(255,this.visibility);
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop();
        }
      }

      score(){
        console.log("im sachin")
if(this.visibility<0&&this.visibility>-105){
  console.log(score)
  score++
}
      }
}
     
  
  
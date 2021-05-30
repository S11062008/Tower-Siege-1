class Polygon{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1.0
           
        }
        this.body = Bodies.circle(50,200,radius,options);
        this.image = loadImage("polygon.png");
        this.radius = radius;
        World.add(world, this.body);
    }


    display(){
        ellipseMode(RADIUS)
        imageMode (CENTER)
        image(this.image,this.body.position.x,this.body.position.y,40,40)
    }   
}

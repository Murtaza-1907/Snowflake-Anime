class Snow{
    constructor(x, y,length,breadth) {
        var options = {
            restitution: 1,
            friction: 0,
            
        }
        // this.r = radius
        this.length = length
        this.breadth = breadth
        this.body = Bodies.rectangle(x, y,length,breadth, options);
    // this.color = color(random(0,255),random(0,255),random(0,255))
    this.image = loadImage("snow5.webp")    
    World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        // noStroke();
        // fill(this.color);
        image(this.image,0,0,this.length,this.breadth)
        // ellipseMode(RADIUS);
        // ellipse(0,0,this.r,this.r);
        pop();
    }

};
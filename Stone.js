class Stone {
    constructor(x,y) {
        var op={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,15,op);
        this.radius = 15;        
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2, this.radius*2);
        pop();
    }
}
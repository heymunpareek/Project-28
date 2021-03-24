class Slingshot {
    constructor(bodya, pointB) {
        var op= {
            bodyA: bodya, 
            pointB: pointB,
            stiffness: 0.004,
            length: 15
        }
        this.slingshot = Matter.Constraint.create(op);
        this.pointB = pointB;
        World.add(world, this.slingshot);
    }
    attach(body ) {
        this.slingshot.bodyA = body;
    }
    fly() {
        this.slingshot.bodyA = null;
    }
    
    display() {
        if(this.slingshot.bodyA) {
        var ba = this.slingshot.bodyA.position;
        var pb = this.pointB;
        push();
        strokeWeight(1.5);
        stroke("black");
        line(ba.x, ba.y, pb.x, pb.y);
        pop();
    }
}
}
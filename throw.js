class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.Throw = Constraint.create(options);
        World.add(world, this.Throw);
    }
    fly(){
        this.Throw.bodyA=null
    }
    display(){
        if(this.Throw.bodyA){
        var pointA = this.Throw.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
      //line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
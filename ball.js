class Ball
{
    constructor(x,y,r){

        var option = {
            isStatic : false,
            restitution : 1,
            friction : 1,
            density : 0.7
        }

        this.body = Bodies.circle(x,y,r,option)
        this.r = r
        World.add(world,this.body)

    }

    display(){

        var pos = this.body.position

        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.r,this.r)
    }
}
class Roof{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body= Bodies.rectangle(400, 180, 550, 20, options);
        this.width=550;
        this.height=20;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill(255)
        rect(pos.x, pos.y, this.width, this.height)
    }
}
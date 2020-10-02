class Brick 
{
    constructor(x,y,width,height) 
    {
        var box_option =
        {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,box_option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display() 
    {
        var posi = this.body.position;
        rectMode(CENTER);
        fill(255,0,0);
        rect(posi.x,posi.y,this.width,this.height);
    }
}
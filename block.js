class Block{
    constructor(x, y, x1, y1){
        this.x  = x
        this.y  = y
        this.x1 = x1
        this.y1 = y1
        this.active = true
    }
    render(){
        fill(255,0,0)
        rect(this.x, this.y, this.x1, this.y1)
        if( Math.abs(ball.y - this.y) <= 20 && Math.abs((ball.x) - this.x) <= 40){
        player.wave -= 1
        this.active = false
        ball.directionY *= -1       
    }
    }
}
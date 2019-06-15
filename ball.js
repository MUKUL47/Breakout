class Ball{
    constructor(x, y, radius){
        this.directionY = 2
        this.directionX = 0
        this.x = x
        this.y = y
        this.radius = radius
    }
    render(){
        fill(255,255,0)
        circle(this.x, this.y,this.radius)
    }
    move(){
        this.x += this.directionX
        this.y += this.directionY
        if( this.x > width || this.x < 0){
          this.directionX *= -1     
        }
        else if( this.y < 0 )  {
          this.directionY *= -1
        }
    }
    
    checkCollisionWithPlayer (x, y) {
      let xCoord = Math.abs(mouseX - this.x)
      if( Math.abs(y - this.y) < 5 && xCoord <= 105){ 
        this.directionY = -2
        if(xCoord > 50){
          this.directionX = Math.abs(xCoord-50)/10
        }else if(xCoord < 50){
          this.directionX = -Math.abs(xCoord-50)/10
        }
      }   
    }
  }
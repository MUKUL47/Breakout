class Player{
    constructor(x, y, x1, y1){
        this.x  = x
        this.y  = y
        this.x1 = x1
        this.y1 = y1
        this.wave = 0
    }
    
    render(){
        fill(255,255,255)
        rect(mouseX, this.y, this.x1, this.y1)
    }

    move(direction){ 
        if(this.x <=  0) { this.x += 2   }
        if(this.x >= 700){ this.x -= 2 } 
        if( (this.x + this.x1 < width) && (this.x > 0) ){
            this.x  += direction
        }        
     }


}
var player, ball, blocks = new Array()
var direction = ''
reset = ()=>{
    player, ball, blocks = new Array(), direction = ''
    player = new Player(200, 550, 100, 20) 
    ball   = new Ball(400,500,15)
    initEnemies(5) 
}
function setup(){
    createCanvas(800, 600)
    player = new Player(200, 550, 100, 20) 
    ball   = new Ball(300,500,15)
    initEnemies(10)       
}
var render = ()=>{
    player.render()
    ball.render()
    renderEnemies()
}
var movement = ()=>{   
    ball.move()
}
var miscellaneous = ()=>{
    ball.checkCollisionWithPlayer(player.x, player.y)
    if( player.wave == 0 ){
        blocks = new Array()
        initEnemies(10)   
    }
}
function draw(){    
    background(0)
    render()
    movement()
    miscellaneous()
}
function initEnemies(times){
    player.wave = times
    let j = -1
    for(let i = 0; i < times; i++){
            
        if( i > 4 ) {
            blocks.push(new Block(60+(++j*150), 100*2, 70, 20))    
        }else{
            blocks.push(new Block(60+(i*150), 100, 70, 20))
        }
    }    
}
function renderEnemies(){
    blocks.forEach((block)=>{
        if( block.active ){
            block.render()
        }
    })
}
function keyPressed(){
    switch(keyCode){
        case LEFT_ARROW:
            direction = 'LEFT'
            break
        case RIGHT_ARROW:
            direction = 'RIGHT'
            break    
    }
}

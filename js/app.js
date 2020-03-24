// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x || 0;
    this.y = y //|| Math.floor(Math.random()* 606);
    this.speed = 150
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += dt*this.speed;
    if (this.x > 505 ) { 
        this.x = -50
    }
    
  
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
   
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
  this.sprite = 'images/char-boy.png'   
  this.x = x || 0;
  this.y = y || 0;
  this.speed = 50;
} 

Player.prototype.update = function(){
    for (var i=0 ; i< allEnemies.length ; i++){
        if( 0 < this.y && this.y< 240 && allEnemies[i].y===this.y+30 && Math.floor(allEnemies[i].x) >= this.x-10 && Math.floor(allEnemies[i].x) <= this.x+10){ 
            console.log(this.x, this.y ,Math.floor(allEnemies[i].x ))
             this.x=0
             this.y=360
        }
    }
   
};
Player.prototype.render = function(){
 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

Player.prototype.handleInput = function(key){
  
    //  for (var key in obj){
          if (key=== "left" ) { 
              if(this.x < 0){
                  this.x=500
              }
              else{
                this.x -= 101 ;
              }
            }
            if (key=== "right" ) { 
                if(this.x > 500){
                    this.x=0
                }
                else{
                  this.x += 101 ;
                }
            }

            if (key === 'up' && this.y > -5) { 
                this.y -= 80 ;
            } if (key === 'down' && this.y < 420) { 
                this.y += 80 ;
            }
    //  }
      

};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(0,360);
var allEnemies = [];
allEnemies.push(new Enemy(100,230));
allEnemies.push(new Enemy(50,150));
allEnemies.push(new Enemy(100,70));
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
var collisition = function() { 
    console.log("ok")

    allEnemies[0].imageLeftSide = allEnemies[0].x; 
    allEnemies[0].imageRightSide = allEnemies[0].x + allEnemies[0].imageWidth;  
    allEnemies[0].imageTopSide = allEnemies[0].y;  
    v.imageDownSide = allEnemies[0].y + allEnemies[0].imageHeight; 

    player.imageLeftSide = player.x; 
    player.imageRightSide = player.x + player.imageWidth;  
    player.imageTopSide = player.y;  
    player.imageDownSide = player.y + player.imageHeight; 
}
// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x || 0;
    this.y = y //|| Math.floor(Math.random()* 606);
    this.speed =speed || 150
};

// Update the enemy's position, required method for game
// Parameter: dt, a ti

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += dt*this.speed;
    if (this.x > 505 ) { 
        this.x = -50
        this.speed += 30;        
    }

    if( 0 < player.y && player.y< 251 && this.y===player.y+30 && Math.floor(this.x) >= player.x-25 && Math.floor(this.x) <= player.x+25){ 
        //console.log(player.x, player.y ,Math.floor(this.x ))
         game.lives--;
         player.reset();
         for (var i = 0 ; i< allEnemies.length ; i++){
            allEnemies[i].speed=150
         }
         if(game.lives === 0){
            game.lives = 3     
        }
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
  //this.lives = 3;
} 

Player.prototype.update = function(){
    if(this.y >-50 && this.y <0){
        //console.log(this.y);    
    setTimeout(()=> { 
            this.x=0;
            this.y = 360;        
        }, 5000); 
    }   
};

Player.prototype.render = function(){
 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key){
    
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
                if (this.y >-50 && this.y <0){ 
                    var win = document.createElement('p');
                    win.innerHTML = " **YOU WON** "
                    document.body.appendChild(win);
                }
            } 
            if (key === 'down' && this.y < 420) { 
                this.y += 80 ;
            }
};

Player.prototype.reset=function(){
    this.x=0;
    this.y=360;
    for (var i = 0 ; i < allEnemies.length ; i++){
        allEnemies[i].speed=150;
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(0,360);
var allEnemies = [];
allEnemies.push(new Enemy(0,230));
allEnemies.push(new Enemy(0,150));
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

    allEnemies[0].imageLeftSide = allEnemies[0].x; 
    allEnemies[0].imageRightSide = allEnemies[0].x + allEnemies[0].imageWidth;  
    allEnemies[0].imageTopSide = allEnemies[0].y;  
    v.imageDownSide = allEnemies[0].y + allEnemies[0].imageHeight; 

    player.imageLeftSide = player.x; 
    player.imageRightSide = player.x + player.imageWidth;  
    player.imageTopSide = player.y;  
    player.imageDownSide = player.y + player.imageHeight; 
}
var  Game = function () { 
    this.sprite = 'images/stone-block.png'
    this.lives=3 
    this.levels;
    this.score ;
 }
  

 Game.prototype.update =function(){
        //ctx.rowImages.splice(1,0,'images/stone-block.png')
  }

  Game.prototype.render=function(){
        
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  var game = new Game();


   
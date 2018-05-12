// Enemies player must avoid
var Enemy = function(x, y) {
    this.x = x;
    this.y =y;
    this.speed = Math.floor((Math.random()*250)+100);
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    //Check if enemy reached the end of the canvas and reset to beginning
    	if (this.x > 505) {
    		this.x = -50;
    	};
    //Check collision with a player
    	if (player.x < this.x +50 && player.x +45 > this.x && player.y < this.y +30 && 30 + player.y > this.y) {
    		player.reset();
    	};
};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class
var Player = function() {
	this.x = 200;
	this.y = 400;
	this.sprite = 'images/char-horn-girl.png';
}

// Player's position
Player.prototype.update = function () {
	//Checking if player is within canvas
	if (this.x > 410) {
		this.x = 410;
	}
	if (this.y > 400) {
		this.y = 400;
	}
	if (this.x < 0) {
		this.x = 0;
	}
	//Reaching water resets the game
	if (this.y < 0) {
		this.reset();
	}
};

Player.prototype.reset = function () {
	this.x = 200;
	this.y = 400;
}

//Draw a player on the screen
Player.prototype.render = function () {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Setting handleinput method
Player.prototype.handleInput = function (keyPress) {
	if (keyPress == "left") {
		this.x -= 50;
	}
	if (keyPress == "up") {
		this.y -= 50;
	}
	if (keyPress == "right") {
		this.x += 50;
	}
	if (keyPress == "down") {
		this.y += 50;
	}
};

// Instantiate enemy
var allEnemies = [];

//Push new enemies to array
allEnemies.push(new Enemy(-80, 60));
allEnemies.push(new Enemy(-150, 140));
allEnemies.push(new Enemy(-400, 140));
allEnemies.push(new Enemy(-200, 230));

//instantiate player
var player = new Player ();



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

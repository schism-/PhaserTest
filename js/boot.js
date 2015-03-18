var boot = function(game){
	console.log("%cStarting my awesome game", "color:white; background:red");
};

boot.prototype = {
	preload: function(){
          this.game.load.image('logo', 'phaser.png');
	},
  	create: function(){
		var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
	    logo.anchor.setTo(0.5, 0.5);
	},
    update: function(){
        if (this.game.input.mousePointer.isDown) {
            this.game.state.start("main_menu");
        }
    }
}

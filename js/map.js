var map = function(game){
	console.log("%cStarting my awesome map", "color:white; background:red");
};


map.prototype = {
	preload: function(){
        this.game.load.image('avatar', 'images/face' + (this.game.face+1) + '.png');

        this.game.load.image('orizz', 'images/dritta.png');
        this.game.load.image('vert', 'images/vertical.png');
        this.game.load.image('curva', 'images/curva.png');

	},
  	create: function(){
        var style = { font: "18px Arial", fill: "#ffffff", align: "center" };
        var start = this.game.add.text(40, 20, this.game.username, style);
        start.anchor.setTo(0, 0.5);

        avatar = this.game.add.sprite(20, 20, 'avatar');
        avatar.anchor.setTo(0.5, 0.5);
        avatar.width = 20;
        avatar.height = 20;

        var start = this.game.add.text(this.game.world.width - 150, 20, "Level: " + this.game.level, style);
        start.anchor.setTo(0, 0.5);

        avatar = this.game.add.sprite(20, 20, 'avatar');
        avatar.anchor.setTo(0.5, 0.5);
        avatar.width = 20;
        avatar.height = 20;
	}
}

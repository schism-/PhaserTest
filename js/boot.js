var boot = function(game){
	console.log("%cStarting my awesome game", "color:white; background:red");
};

boot.prototype = {
  init: function(){
    // Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
    this.game.input.maxPointers = 1;

    // Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
    this.game.stage.disableVisibilityChange = false;

    //this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
    //this.game.scale.pageAlignHorizontally = true;

    this.game.username = "";
    this.game.face = 0;
    this.game.level = 10;

    this.game.puzzle_diff = 0;
    this.game.forme_diff = 0;
    this.game.associazioni_diff = 0;
    this.game.patente_diff = 0;
    this.game.trivia_diff = 0;

  },
	preload: function(){
    this.game.load.image('bg', 'images/bg_preloader.png');

    this.game.load.image('logo', 'images/logo_limedu.png');

    this.game.load.image('preloaderBackground', 'images/preloader_background.png');
    this.game.load.image('preloaderBar', 'images/preloader_bar.png');
	},

  create: function(){
    this.game.state.start('preloader');
	}
}

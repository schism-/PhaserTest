var preloader = function(game){
	console.log("%cStarting my awesome preloader", "color:white; background:red");

  game.bg = null;
  game.background = null;
  game.preloadBar = null;

  game.ready = false;
};

preloader.prototype = {
	preload: function(){
    this.game.bg = this.game.add.sprite(0, 0, 'bg');

    this.game.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.game.logo.anchor.setTo(0.5, 0.5);

    this.game.background = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 100, 'preloaderBackground');
    this.game.background.anchor.setTo(0.5, 0.5);
    this.game.preloadBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 100, 'preloaderBar');
    this.game.preloadBar.anchor.setTo(0.5, 0.5);
    
    this.game.load.setPreloadSprite(this.game.preloadBar);

    // Main Menu Assets
    this.game.load.image('main_menu_bg', 'images/background_city.png');
    this.game.load.image('icona_voci_menu', 'images/icona_voci_menu.png');
    this.game.load.spritesheet('button', 'images/button_sprite_sheet.png', 193, 71);
    
    //BUttons spritesheets
    this.game.load.spritesheet('start_button', 'images/start_button_sprite_sheet.png', 193, 71);
    this.game.load.spritesheet('cont_button', 'images/cont_button_sprite_sheet.png', 193, 71);
    this.game.load.spritesheet('options_button', 'images/options_button_sprite_sheet.png', 193, 71);
    
    this.game.load.spritesheet('char_button_left', 'images/char_button_sprite_sheet_left.png', 60, 60);
    this.game.load.spritesheet('char_button_right', 'images/char_button_sprite_sheet_right.png', 60, 60);

    //Load tilemap
    this.game.load.image('curva', 'images/curva.png');
    this.game.load.image('dritta', 'images/dritta.png');
    this.game.load.image('vert', 'images/vertical.png');

    //Load avatars
    this.game.load.image('char-base', 'images/characters/base-body.png');

    this.game.load.image('char-hair-black', 'images/characters/head/hair-black.png');
    this.game.load.image('char-hair-blonde', 'images/characters/head/hair-blonde.png');
    this.game.load.image('char-hair-orange', 'images/characters/head/hair-orange.png');

    this.game.load.image('char-shirt-blue', 'images/characters/body/shirt-blue.png');
    this.game.load.image('char-shirt-gray', 'images/characters/body/shirt-gray.png');
    this.game.load.image('char-shirt-red', 'images/characters/body/shirt-red.png');    

    this.game.load.image('char-pants-blue', 'images/characters/legs/pants-blue.png');
    this.game.load.image('char-pants-black', 'images/characters/legs/pants-black.png');
    this.game.load.image('char-pants-green', 'images/characters/legs/pants-green.png');
    
    // Puzzle Assets
    // this.load.image('piece1', 'assets/images/piece1.png');
    // this.load.image('piece2', 'assets/images/piece2.png');
    // this.load.image('piece3', 'assets/images/piece3.png');
    // this.load.image('piece4', 'assets/images/piece4.png');
    // this.load.image('piece5', 'assets/images/piece5.png');
    // this.load.image('piece6', 'assets/images/piece6.png');
    // this.load.image('piece7', 'assets/images/piece7.png');
    // this.load.image('piece8', 'assets/images/piece8.png');
    // this.load.image('piece9', 'assets/images/piece9.png');
	},
  create: function(){
		this.game.preloadBar.cropEnabled = false;
    this.game.state.start('main_menu');
	},
  update: function(){
    
  }
}
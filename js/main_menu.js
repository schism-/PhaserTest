var main_menu = function(game){
    console.log("%cStarting my awesome main menu", "color:white; background:red");

    game.menu_voices = [];
    game.active_voice = 0;
    game.lastTime = 0;
    game.main_menu_bg = null;
};

main_menu.prototype = {
	preload: function(){
        center_x = this.game.world.centerX;
        center_y = this.game.world.centerY;

        this.game.main_menu_bg = this.game.add.sprite(0, 0, 'main_menu_bg');

        this.game.logo = this.game.add.sprite(center_x, center_y - 200, 'logo');
        this.game.logo.anchor.setTo(0.5, 0.5);

        start = this.game.add.button(center_x, center_y, 'start_button', this.pressButton, this, 1, 2, 0);
        start.name = 'start';
        start.anchor.setTo(0.5, 0.5);
        start.events.onInputDown.add(this.onDown, this);

        cont = this.game.add.button(center_x, center_y + 75, 'cont_button', this.pressButton, this, 1, 2, 0);
        cont.name = 'continue';
        cont.anchor.setTo(0.5, 0.5);
        cont.events.onInputDown.add(this.onDown, this);

        options = this.game.add.button(center_x, center_y + 150, 'options_button', this.pressButton, this, 1, 2, 0);
        options.name = 'options';
        options.anchor.setTo(0.5, 0.5);
        options.events.onInputDown.add(this.onDown, this);
	},
  	create: function(){
        
	},
    update: function(){
        
    },
    pressButton: function(button){
        if (button.name == "start"){
            this.game.state.start("character");
        }
        else if (button.name == "continue"){

        }
        else if (button.name == "options"){

        }
    },
    onDown: function(button) {
        this.game.add.tween(button.scale).to({x: 0.9, y: 0.9}, 100, Phaser.Easing.Cubic.Out, true);
        this.game.add.tween(button.scale).to({x: 1.05, y: 1.05}, 100, Phaser.Easing.Cubic.Out, true, 100);
        this.game.add.tween(button.scale).to({x: 1.0, y: 1.0}, 100, Phaser.Easing.Cubic.Out, true, 200);
    }
}

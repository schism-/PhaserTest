var main_menu = function(game){
    menu_voices = [];
    active_voice = 0;
    lastTime = 0;
	console.log("%cStarting my awesome main menu", "color:white; background:red");
};

main_menu.prototype = {
	preload: function(){

	},
  	create: function(){
		var style = { font: "32px Arial", fill: "#ffffff", align: "center" };

        var title = this.game.add.text(this.game.world.centerX, this.game.world.centerY - this.game.world.centerY/2, "- main menu -", style);
        title.anchor.setTo(0.5, 0.5);
        title.inputEnabled = true;

        var padding = 50;

        var start = this.game.add.text(this.game.world.centerX, this.game.world.centerY - this.game.world.centerY/2 + padding, "start", style);
        start.anchor.setTo(0.5, 0.5);
        start.inputEnabled = true;

        var cont = this.game.add.text(this.game.world.centerX, this.game.world.centerY - this.game.world.centerY/2 + 2*padding, "continue", style);
        cont.anchor.setTo(0.5, 0.5);
        cont.inputEnabled = true;

        var options = this.game.add.text(this.game.world.centerX, this.game.world.centerY - this.game.world.centerY/2 + 3*padding, "options", style);
        options.anchor.setTo(0.5, 0.5);
        options.inputEnabled = true;

        menu_voices = [start, cont, options];

        this.activateBtn(active_voice);
	},
    update: function(){
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN) && (this.game.time.time > lastTime + 300)){
            lastTime = this.game.time.time;
            this.voiceSelection(true);
        }

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP) && (this.game.time.time > lastTime + 300)){
            lastTime = this.game.time.time;
            this.voiceSelection(false);
        }

        if(this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
            if (active_voice == 0){
                //start
                this.game.state.start("character");
            }
            else if (active_voice == 1){
                //continue
            }
            else{
                //options
            }
        }
    },
    activateBtn: function(btn_idx){
        menu_voices[btn_idx].setStyle({fill: "#ff11aa"});
        menu_voices[btn_idx].setText("*** " + menu_voices[btn_idx].text + " ***");
    },
    deactivateBtn: function(btn_idx){
        menu_voices[btn_idx].setStyle({fill: "#ffffff"});
        menu_voices[btn_idx].setText(menu_voices[btn_idx].text.slice(4, menu_voices[btn_idx].text.length - 4));
    },
    voiceSelection: function(flag){
        if (flag){
            this.deactivateBtn(active_voice);
            active_voice++;
            if (active_voice >= menu_voices.length)
                active_voice = 0;
            this.activateBtn(active_voice);
        }
        else{
            this.deactivateBtn(active_voice);
            active_voice--;
            if (active_voice < 0)
                active_voice = menu_voices.length - 1;
            this.activateBtn(active_voice);
        }
    },

}

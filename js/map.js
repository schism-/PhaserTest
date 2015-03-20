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

        var levels = [0, 0, 0, 0, 0];
        var offset_x = 100;
        var offset_y = 100;
        var padding = 15;
        var dimension = 85;
        var patenti = 5;

        for (var i = 0; i < patenti; i++) {
            levels[i] = [0, 0, 0, 0, 0];
            for (var j = 0; j < patenti; j++) {
                //console.log("Adding button " + i + " " + j + "(" + (i * patenti + j) + ")")
                if (j == patenti - 1){
                    levels[i][j] = this.game.add.button(offset_x + j * (dimension + padding),
                                                        offset_y + i * (dimension + padding),
                                                        'avatar',
                                                        this.startLevel,
                                                        this, 2, 1, 0);
                }
                else{
                    levels[i][j] = this.game.add.button(offset_x + j * (dimension + padding),
                                                        offset_y + i * (dimension + padding),
                                                        'orizz',
                                                        this.startLevel,
                                                        this, 2, 1, 0);
                }

                levels[i][j].name = 'level' + (i * patenti + j);
                levels[i][j].anchor.setTo(0.5, 0.5);
                levels[i][j].width = dimension;
                levels[i][j].height = dimension;
                levels[i][j].events.onInputDown.add(this.onDown, this);

            };
        };
	},
    startLevel: function(){

    },
    onDown: function(button) {
        var orig_scale = button.scale;
        this.game.add.tween(button).to({width: 75, height: 75}, 200, Phaser.Easing.Cubic.Out, true);
        this.game.add.tween(button).to({width: 85, height: 85}, 200, Phaser.Easing.Cubic.Out, true, 200);
        var level_no = parseFloat(button.name.slice(5, button.name.lenght));
        //level_no = level_no + 1;
        console.log(level_no);

        var difficolta = parseInt(level_no / 5);
        var tipologia = level_no % 5;

        console.log("diff " + difficolta + "liv " + tipologia);

        if (tipologia == 0){
            //forme
        }
        else if (tipologia == 1){
            //associazione
        }
        else if (tipologia == 2){
            //puzzle
            this.game.puzzle_diff = difficolta;
            //this.game.state.start("Puzzle");
        }
        else if (tipologia == 3){
            //trivia
        }
        else if (tipologia == 4){
            //patente
        }
    }
}

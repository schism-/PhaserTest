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

        var start = this.game.add.text(this.game.world.width - 150, 20, "Level: " + this.game.level, style);
        start.anchor.setTo(0, 0.5);

        //avatar = this.game.add.sprite(20, 20, 'avatar');
        //avatar.anchor.setTo(0.5, 0.5);
        //avatar.width = 20;
        //avatar.height = 20;

        this.levels = [0, 0, 0, 0, 0];
        this.offset_x = 100;
        this.offset_y = 100;
        this.padding = 15;
        this.dimension = 85;
        this.patenti = 5;

        for (var i = 0; i < this.patenti; i++) {
            this.levels[i] = [0, 0, 0, 0, 0];
            for (var j = 0; j < this.patenti; j++) {
                //console.log("Adding button " + i + " " + j + "(" + (i * patenti + j) + ")")
                if (j == this.patenti - 1){
                    this.levels[i][j] = this.game.add.button(this.offset_x + j * (this.dimension + this.padding),
                                                        this.offset_y + i * (this.dimension + this.padding),
                                                        'orizz',
                                                        this.startLevel,
                                                        this, 2, 1, 0);
                }
                else{
                    this.levels[i][j] = this.game.add.button(this.offset_x + j * (this.dimension + this.padding),
                                                        this.offset_y + i * (this.dimension + this.padding),
                                                        'orizz',
                                                        this.startLevel,
                                                        this, 2, 1, 0);
                }

                this.levels[i][j].name = 'level' + (i * this.patenti + j);
                this.levels[i][j].anchor.setTo(0.5, 0.5);
                if (this.game.level < (i * this.patenti + j)){
                    this.levels[i][j].width = this.dimension;
                    this.levels[i][j].height = this.dimension;
                    this.levels[i][j].events.onInputDown.add(this.onDown, this);
                }
                else{
                    this.levels[i][j].width = this.dimension / 2;
                    this.levels[i][j].height = this.dimension / 2;
                }


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
        console.log(level_no);

        var difficolta = parseInt(level_no / 5);
        var tipologia = level_no % 5;

        console.log("diff " + difficolta + "liv " + tipologia);

        if (tipologia == 0){
            //forme
            console.log("forme");
        }
        else if (tipologia == 1){
            //associazione
            console.log("associazione");
        }
        else if (tipologia == 2){
            console.log("puzzle");
            //puzzle
            this.game.puzzle_diff = difficolta;
            this.game.state.start("preloader_puzzle");
        }
        else if (tipologia == 3){
            console.log("trivia");
            //trivia
        }
        else if (tipologia == 4){
            console.log("patente");
            //patente
        }
    }
}

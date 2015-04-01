var preloader_puzzle = function(game){
	console.log("%cStarting my awesome preloader_puzzle", "color:white; background:red");
  game.preloadBar = null;
};

preloader_puzzle.prototype = {
	preload: function(){
        this.game.preload_puzzleBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 100, 'preloaderBar');
        this.game.preload_puzzleBar.anchor.setTo(0.5, 0.5);

        this.game.load.setPreloadSprite(this.game.preload_puzzleBar);

        //load a random puzzle
        base_path = "images/puzzle/";
        puzzle_no = 1;

        this.load.image('welldone', "images/puzzle/welldone.png");

        // Puzzle Assets
        this.load.image('base', base_path + "puzzle_" + puzzle_no + "/base.png");
        this.load.image('piece1', base_path + "puzzle_" + puzzle_no + "/piece1.png");
        this.load.image('piece2', base_path + "puzzle_" + puzzle_no + "/piece2.png");
        this.load.image('piece3', base_path + "puzzle_" + puzzle_no + "/piece3.png");
        this.load.image('piece4', base_path + "puzzle_" + puzzle_no + "/piece4.png");
        this.load.image('piece5', base_path + "puzzle_" + puzzle_no + "/piece5.png");
        this.load.image('piece6', base_path + "puzzle_" + puzzle_no + "/piece6.png");
        this.load.image('piece7', base_path + "puzzle_" + puzzle_no + "/piece7.png");
        this.load.image('piece8', base_path + "puzzle_" + puzzle_no + "/piece8.png");
        this.load.image('piece9', base_path + "puzzle_" + puzzle_no + "/piece9.png");

	},
    create: function(){
        this.game.preloadBar.cropEnabled = false;
        this.game.state.start('puzzle');
	},
    update: function(){

    }
}

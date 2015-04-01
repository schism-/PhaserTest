var puzzle = function(game){
    console.log("%cStarting my awesome puzzle", "color:white; background:red");
};

puzzle.prototype = {
    init: function(){
        this.piecesleft = 9;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        // Add graphics
        this.bg = this.add.sprite(0, 0, 'main_menu_bg');
        //this.interiorTitle = this.add.sprite(40, 8, 'interiorTitle');

        this.base = this.game.add.sprite(this.game.world.centerX + 200, this.game.world.centerY, 'base');
        this.base.anchor.setTo(0.5, 0.5);

        // Add Draggable Pieces
        this.rng = new Phaser.RandomDataGenerator(42);

        this.piece1 = this.game.add.sprite( this.rng.integerInRange(20, this.game.world.width / 2 - 20),
                                            this.rng.integerInRange(20, this.game.world.height - 20),
                                            'piece1');
        this.piece2 = this.game.add.sprite( this.rng.integerInRange(20, this.game.world.width / 2 - 20),
                                            this.rng.integerInRange(20, this.game.world.height - 20),
                                            'piece2');
        this.piece3 = this.game.add.sprite( this.rng.integerInRange(20, this.game.world.width / 2 - 20),
                                            this.rng.integerInRange(20, this.game.world.height - 20),
                                            'piece3');
        this.piece4 = this.game.add.sprite( this.rng.integerInRange(20, this.game.world.width / 2 - 20),
                                            this.rng.integerInRange(20, this.game.world.height - 20),
                                            'piece4');
        this.piece5 = this.game.add.sprite( this.rng.integerInRange(20, this.game.world.width / 2 - 20),
                                            this.rng.integerInRange(20, this.game.world.height - 20),
                                            'piece5');
        this.piece6 = this.game.add.sprite( this.rng.integerInRange(20, this.game.world.width / 2 - 20),
                                            this.rng.integerInRange(20, this.game.world.height - 20),
                                            'piece6');
        this.piece7 = this.game.add.sprite( this.rng.integerInRange(20, this.game.world.width / 2 - 20),
                                            this.rng.integerInRange(20, this.game.world.height - 20),
                                            'piece7');
        this.piece8 = this.game.add.sprite( this.rng.integerInRange(20, this.game.world.width / 2 - 20),
                                            this.rng.integerInRange(20, this.game.world.height - 20),
                                            'piece8');
        this.piece9 = this.game.add.sprite( this.rng.integerInRange(20, this.game.world.width / 2 - 20),
                                            this.rng.integerInRange(20, this.game.world.height - 20),
                                            'piece9');


        // Pieces final position (Hard coded)
        this.piece1.finalPositionX = this.game.world.centerX + 55;
        this.piece1.finalPositionY = this.game.world.centerY - 146;

        this.piece2.finalPositionX = this.game.world.centerX + 152;
        this.piece2.finalPositionY = this.game.world.centerY - 146;

        this.piece3.finalPositionX = this.game.world.centerX + 224;
        this.piece3.finalPositionY = this.game.world.centerY - 146;

        this.piece4.finalPositionX = this.game.world.centerX + 55;
        this.piece4.finalPositionY = this.game.world.centerY - 49;

        this.piece5.finalPositionX = this.game.world.centerX + 126;
        this.piece5.finalPositionY = this.game.world.centerY - 49;

        this.piece6.finalPositionX = this.game.world.centerX + 247;
        this.piece6.finalPositionY = this.game.world.centerY - 73;

        this.piece7.finalPositionX = this.game.world.centerX + 55;
        this.piece7.finalPositionY = this.game.world.centerY + 48;

        this.piece8.finalPositionX = this.game.world.centerX + 152;
        this.piece8.finalPositionY = this.game.world.centerY + 27;

        this.piece9.finalPositionX = this.game.world.centerX + 221;
        this.piece9.finalPositionY = this.game.world.centerY + 48;

        // Remember the original position
        for (var i = 1; i <= 9; i++) {

            this['piece' + i].originX = this['piece' + i].x;
            this['piece' + i].inputEnabled = true;
            this['piece' + i].input.enableDrag(false, true);
            this['piece' + i].events.onDragStop.add(this.pieceDragStop, this);

        };
    },

    // When we release a piece do this...
    pieceDragStop: function(item) {
        console.log((item.x - this.game.world.centerX) + " " + (item.y - this.game.world.centerY));
        // Calculate the distance between the piece and its final spot
        this.totalDistance = this.game.physics.arcade.distanceToXY( item , item.finalPositionX, item.finalPositionY);

        // If the distance is minor than 50 pixels the piece is placed in its final spot,
        // otherwise the piece return to its original position
        if (this.totalDistance < 50) {

            this.game.add.tween(item).to({x: item.finalPositionX, y: item.finalPositionY }, 500, Phaser.Easing.Back.Out, true);
            // This piece is not draggable anymore
            item.inputEnabled = false;
            // Pieces to finish minus one
            this.piecesleft--;

            // If all the pieces are assembled the puzzle is finished :)
            if (this.piecesleft === 0) {

                // Show a greeting message
                //this.basecolor = this.game.add.sprite(368, 121, 'basecolor');
                this.welldone = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 200, 'welldone');
                this.welldone.anchor.setTo(0.5, 0.5);
                this.game.add.tween(this.welldone.scale).from({x: 0, y: 0 }, 500, Phaser.Easing.Back.Out, true);

                this.backtomap = this.game.add.button(center_x + 150, center_y + 200, 'start_button', this.backtomap, this, 1, 2, 0);
                this.backtomap.name = 'backtomap';
                this.backtomap.anchor.setTo(0.5, 0.5);
                this.game.add.tween(this.backtomap.scale).from({x: 0, y: 0 }, 500, Phaser.Easing.Back.Out, true);

                this.game.level = this.game.level + 1;

                // Play the final animation
                //this.animationWin = this.game.add.sprite(366, 119, 'jigsawWin_anim');
                //this.animationWin.animations.add('win');
                //this.animationWin.animations.play('win', 24, true);

            };

        } else {

            this.game.add.tween(item).to({x: item.originX, y: item.originY }, 500, Phaser.Easing.Back.Out, true);

        };
    },
    backtomap: function(){
        this.game.state.start("map");
    },
    preload: function(){

    },

    create: function(){

    }
}

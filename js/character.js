var character = function(game){
    console.log("%cStarting my awesome character", "color:white; background:red");
    username_field = null;
    faces = [];
    current_face = -1;
    current_face_idx = 0;
};


character.prototype = {
    preload: function(){
        this.game.load.image('face1', 'images/face1.png');
        this.game.load.image('face2', 'images/face2.png');
        this.game.load.image('face3', 'images/face3.png');

        faces = ["face1", "face2", "face3"];
    },
    create: function(){
        var style = { font: "32px Arial", fill: "#ffffff", align: "center" };

        var insert_username_lbl = this.game.add.text(this.game.world.centerX, this.game.world.centerY/4, "Insert username", style);
        insert_username_lbl.anchor.setTo(0.5, 0.5);
        insert_username_lbl.inputEnabled = true;

        username_field = this.game.add.text(this.game.world.centerX, this.game.world.centerY/4 + 30, "", style);
        username_field.anchor.setTo(0.5, 0.5);
        username_field.inputEnabled = true;

        this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.BACKSPACE);
        this.game.input.keyboard.addCallbacks(this, null, this.setUsername, this.setUsername);

        button1 = this.game.add.button(this.game.world.centerX - 200, 300, 'buttonFL', this.faceLeft, this, 2, 1, 0);
        button1.name = 'face_left';
        button1.anchor.setTo(0.5, 0.5);
        button1.width = 100;
        button1.height = 100;

        button2 = this.game.add.button(this.game.world.centerX + 200, 300, 'buttonFR', this.faceRight, this, 2, 1, 0);
        button2.name = 'face_right';
        button2.anchor.setTo(0.5, 0.5);
        button2.width = 100;
        button2.height = 100;

        button3 = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 200, 'buttonNext', this.startGame, this, 2, 1, 0);
        button3.name = 'start_game';
        button3.anchor.setTo(0.5, 0.5);
        button3.width = 200;
        button3.height = 100;

        this.loadImage(current_face_idx);
    },
    setUsername: function(event){
        if (event.keyCode == 8){
            username_field.setText(username_field.text.slice(0, username_field.text.length - 1));
        }
        else{
            username_field.setText(username_field.text + String.fromCharCode(event.keyCode));
        }
    },
    faceLeft: function(){
        current_face_idx--;
        if (current_face_idx < 0)
            current_face_idx = faces.length - 1;
        this.loadImage(current_face_idx);
    },
    faceRight: function(){
        current_face_idx++;
        if (current_face_idx >= faces.length)
            current_face_idx = 0;
        this.loadImage(current_face_idx);
    },
    loadImage: function(idx){
        if (current_face != -1)
            current_face.destroy();
        current_face = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, faces[idx]);
        current_face.anchor.setTo(0.5, 0.5);
    },
    startGame: function(){
        this.game.username = username_field.text;
        this.game.face = current_face_idx;
        this.game.state.start("map");
    }
}

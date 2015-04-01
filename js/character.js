var character = function(game){
    console.log("%cStarting my awesome character", "color:white; background:red");
    username_field = null;
};


character.prototype = {
    preload: function(){
        this.game.add.sprite(0, 0, 'main_menu_bg');
    },
    create: function(){
        this.game.heads = ["char-hair-black", "char-hair-blonde", "char-hair-orange"];
        this.game.shirts = ["char-shirt-blue", "char-shirt-gray", "char-shirt-red"];
        this.game.pants = ["char-pants-blue", "char-pants-black", "char-pants-green"];

        this.game.hair_base = null;
        this.game.legs_base = null;
        this.game.shirt_base = null;

        center_x = this.game.world.centerX;
        center_y = this.game.world.centerY;

        var graphics = this.game.add.graphics(0, 0);
        // draw a rectangle
        graphics.lineStyle(1, 0xDDDDDD, 0.5);
        graphics.beginFill(0xDDDDDD, 0.5);
        graphics.drawRect(180, 30, 220, 30);

        style = { font: "30px Arial", fill: "#ffffff", align: "left" };

        insert_username_lbl = this.game.add.text(30, 30, "Username:", style);
        insert_username_lbl.inputEnabled = true;

        style = { font: "30px Arial", fill: "#ffffff", align: "left" };
        username_field = this.game.add.text(190, 30, "", style);
        username_field.inputEnabled = true;

        this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.BACKSPACE);
        this.game.input.keyboard.addCallbacks(this, null, this.setUsername, this.setUsername);

        this.game.body_base = this.game.add.sprite(center_x, center_y, 'char-base');
        this.game.body_base.anchor.setTo(0.5, 0.5);

        this.game.hair_base = this.game.add.sprite(center_x, center_y - 110, this.game.heads[0]);
        this.game.hair_base.anchor.setTo(0.5, 0.5);

        this.game.shirt_base = this.game.add.sprite(center_x, center_y + 76, this.game.shirts[0]);
        this.game.shirt_base.anchor.setTo(0.5, 0.5);

        this.game.legs_base = this.game.add.sprite(center_x, center_y + 125, this.game.pants[0]);
        this.game.legs_base.anchor.setTo(0.5, 0.5);


        left_head = this.game.add.button(center_x - 150, center_y - 100, 'char_button_left', this.updateChar, this, 1, 2, 0);
        left_head.name = 'left_head';
        left_head.anchor.setTo(0.5, 0.5);

        right_head = this.game.add.button(center_x + 150, center_y - 100, 'char_button_right', this.updateChar, this, 1, 2, 0);
        right_head.name = 'right_head';
        right_head.anchor.setTo(0.5, 0.5);

        left_body = this.game.add.button(center_x - 150, center_y + 60, 'char_button_left', this.updateChar, this, 1, 2, 0);
        left_body.name = 'left_body';
        left_body.anchor.setTo(0.5, 0.5);

        right_body = this.game.add.button(center_x + 150, center_y + 60, 'char_button_right', this.updateChar, this, 1, 2, 0);
        right_body.name = 'right_body';
        right_body.anchor.setTo(0.5, 0.5);

        left_pants = this.game.add.button(center_x - 150, center_y + 120, 'char_button_left', this.updateChar, this, 1, 2, 0);
        left_pants.name = 'left_pants';
        left_pants.anchor.setTo(0.5, 0.5);

        right_pants = this.game.add.button(center_x + 150, center_y + 120, 'char_button_right', this.updateChar, this, 1, 2, 0);
        right_pants.name = 'right_pants';
        right_pants.anchor.setTo(0.5, 0.5);

        start = this.game.add.button(center_x, center_y + 200, 'start_button', this.startDown, this, 1, 2, 0);
        start.name = 'start';
        start.anchor.setTo(0.5, 0.5);
    },
    update: function(){

    },
    setUsername: function(event){
        if (event.keyCode == 8){
            if (username_field.text.length > 0){
                username_field.setText(username_field.text.slice(0, username_field.text.length - 1));
            }
        }
        else{
            if (username_field.text.length < 10){
                username_field.setText(username_field.text + String.fromCharCode(event.keyCode));
            }
        }
    },
    updateChar: function(button){
        if (button.name == "left_head"){
            if (this.game.current_head_idx == 0)
                this.game.current_head_idx = this.game.heads.length -1;
            else
                this.game.current_head_idx = this.game.current_head_idx - 1;
            console.log( "left_head" + this.game.current_head_idx);
        }
        else if (button.name == "right_head"){
            if (this.game.current_head_idx == this.game.heads.length - 1)
                this.game.current_head_idx = 0;
            else
                this.game.current_head_idx++;
            console.log( "right_head" + this.game.current_head_idx);
        }
        else if (button.name == "left_body"){
            if (this.game.current_shirt_idx == 0)
                this.game.current_shirt_idx = this.game.shirts.length - 1;
            else
                this.game.current_shirt_idx--;
            console.log( "left_body" + this.game.current_shirt_idx);
        }
        else if (button.name == "right_body"){
            if (this.game.current_shirt_idx == this.game.shirts.length  -1)
                this.game.current_shirt_idx = 0;
            else
                this.game.current_shirt_idx++;
            console.log( "right_body" + this.game.current_shirt_idx);
        }
        else if (button.name == "left_pants"){
            if (this.game.current_pants_idx == 0)
                this.game.current_pants_idx = this.game.pants.length - 1;
            else
                this.game.current_pants_idx--;
            console.log( "left_pants" + this.game.current_pants_idx);
        }
        else if (button.name == "right_pants"){
            if (this.game.current_pants_idx == this.game.pants.length - 1)
                this.game.current_pants_idx = 0;
            else
                this.game.current_pants_idx++;
            console.log( "right_pants" + this.game.current_pants_idx);
        }
        this.repaintChar();
    },
    repaintChar: function(){
        this.game.hair_base.kill();
        this.game.hair_base = this.game.add.sprite(center_x, center_y - 110, this.game.heads[this.game.current_head_idx]);
        this.game.hair_base.anchor.setTo(0.5, 0.5);

        this.game.shirt_base.kill();
        this.game.shirt_base = this.game.add.sprite(center_x, center_y + 76, this.game.shirts[this.game.current_shirt_idx]);
        this.game.shirt_base.anchor.setTo(0.5, 0.5);

        this.game.legs_base.kill();
        this.game.legs_base = this.game.add.sprite(center_x, center_y + 125, this.game.pants[this.game.current_pants_idx]);
        this.game.legs_base.anchor.setTo(0.5, 0.5);
    },
    startDown: function(button){
        this.game.username = username_field.text;
        this.game.state.start("map");
    },
}

let codey;
class mainScene extends Phaser.Scene {
    
    constructor (){
        super('mainScene');
    }
    
    preload()
    {
    // load images or sounds
    this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');
    }
    create()
    {
    // define objects
    this.add.text(50, 50, 'start menu');
    codey = this.add.sprite(30, 200, 'codey');
    }
    update()
    {
    //constant running loop
    }

}
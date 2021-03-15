
class mainScene extends Phaser.Scene {
    
    constructor (){
        super('mainScene');
    }
    
    
    preload()
    {
    // load images or sounds
    this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');

    this.load.image('road', '../assets/road.png');
    this.load.image('car1', '../assets/audi.png');
    
    }
    
    create()
    
    {
    // define objects
    this.add.text(50, 50, 'start menu');
    this.add.sprite(30, 200, 'codey');

    var road = this.add.image(550, 350, 'road');
    road.setScale(1.2);

    var car1 = this.add.image(400, 400, 'car1');


    
    this.input.keyboard.on('keydown-A', function (event) {
        car1.setVElocityX(10);
    });
    }

    update(){

    }
}

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
    
    this.load.plugin('PathBuilder', "../assets/PathBuilder.js",'PathBuilder');
    }
    
    create()
    
    {
    // define objects
    this.add.text(50, 50, 'start menu');
    this.add.image(400, 400, 'car1');
    this.add.image(500, 350, 'road').setScale(1.1);

    var car = this.physics.add.group({
        key: 'car1',})

    this.input.keyboard.on('keydown-A', function (event) {
        car.setVelocityX(-200, 10);
    });
    this.input.keyboard.on('keyup-A', function (event) {
        car.setVelocityX(0, 0);
    });
    this.input.keyboard.on('keydown-W', function (event) {
        car.setVelocityY(-200, 10);
    });
    this.input.keyboard.on('keyup-W', function (event) {
        car.setVelocityY(0, 0);
    });
    this.input.keyboard.on('keydown-D', function (event) {
        car.setVelocityX(200, 10);
    });
    this.input.keyboard.on('keyup-D', function (event) {
        car.setVelocityX(0, 0);
    });
    this.input.keyboard.on('keydown-S', function (event) {
        car.setVelocityY(200, 10);
    });
    this.input.keyboard.on('keyup-S', function (event) {
        car.setVelocityY(0, 0);
    });

    // 1. Each node
    var points = [
        450, 600, 700, 600, 750, 500, 600, 455,
        701, 338, 692, 190, 603, 76, 423, 41,
        272, 78, 181, 186, 230, 328, 416, 395,
        565, 327, 550, 202, 467, 149, 355, 164,
        343, 254, 428, 303
    ];

         //2. Link each node
    var curve = new Phaser.Curves.Spline(points);

         //3. Draw line (visualization not required) optional
    var graphics = this.add.graphics();
    graphics.lineStyle(1, 0xffffff, 0.5);
    curve.draw(graphics, 128);
    graphics.fillStyle(0xff0000, 0.5);
    for (var i = 0; i < curve.points.length; i++) {
        graphics.fillCircle(curve.points[i].x, curve.points[i].y, 4);
    }
         //4. Create a racing car
    var lemming = this.add.follower(curve, 450, 600, 'car1').setScale(0.6);

       //5. Let racing car follow path
    lemming.startFollow({
        duration: 10000,
        yoyo: false,
        repeat: 0,
        rotateToPath: true,
        verticalAdjust: true
    });
    }
    update(){
    }
}

class mainScene extends Phaser.Scene {
    
    constructor (){
        super('mainScene');
    }
    
    
    preload()
    {
    // load images or sounds

    // this.load.image('road', '../assets/road.png');
        this.load.image('road', '../assets/RaceTracks/raceTrackFirst.png');
        this.load.image('car1', '../assets/audi.png');
    
    }
    
    create()
    
    {
    // define objects
    this.add.text(50, 50, 'start menu');
    this.add.image(400, 400, 'car1');
    this.add.image(700, 400, 'road').setScale(0.7);

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

    // Each node
    const points = [
        450, 600, 500, 600, 600, 600, 750, 500, 750, 300, 
        750, 150,700, 100, 500, 150, 350, 100, 
        275, 100,250, 200, 300, 275, 400, 250, 
        450, 275, 500, 350, 550, 325, 650, 225, 
        650, 475, 500, 450, 300, 400, 275, 500, 
        275, 600, 450, 600];

         // Link each node
    var curve = new Phaser.Curves.Spline(points);

         //4. Create a racing car
    var lemming = this.add.follower(curve, 450, 600, 'car1').setScale(0.6);

       // Let racing car follow path
    lemming.startFollow({
        duration: 17500,
        yoyo: false,
        repeat: 1,
        rotateToPath: true,
    });
    }
    update(){
    }
}
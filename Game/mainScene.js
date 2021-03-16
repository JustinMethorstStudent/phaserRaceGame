class mainScene extends Phaser.Scene {

    constructor() {
        super('mainScene');
    }


    preload() {
        // load images or sounds
        this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');

        this.load.image('road', '../assets/road.png');
        this.load.image('car1', '../assets/audi.png');

        this.load.plugin('PathBuilder', "../assets/PathBuilder.js", 'PathBuilder');
    }

    create() {
        // define objects
        this.add.text(50, 50, 'start menu');
        this.add.image(400, 400, 'car1');
        this.add.image(500, 350, 'road').setScale(1.1);

        var car = this.physics.add.group({
            key: 'car1',
        })
        // Get key inputs
        this.input.keyboard.on('keydown-A', function (event) {
            car.setVelocityX(-200, 10);// move car left
        });
        this.input.keyboard.on('keyup-A', function (event) {
            car.setVelocityX(0, 0);// stop car
        });
        this.input.keyboard.on('keydown-W', function (event) {
            car.setVelocityY(-200, 10);// move car up
        });
        this.input.keyboard.on('keyup-W', function (event) {
            car.setVelocityY(0, 0);// stop car
        });
        this.input.keyboard.on('keydown-D', function (event) {
            car.setVelocityX(200, 10);// move car right
        });
        this.input.keyboard.on('keyup-D', function (event) {
            car.setVelocityX(0, 0);// stop car
        });
        this.input.keyboard.on('keydown-S', function (event) {
            car.setVelocityY(200, 10);// move car down
        });
        this.input.keyboard.on('keyup-S', function (event) {
            car.setVelocityY(0, 0);// stop car
        });

        // Each node
        var points = [ // initialize point on road
            450, 600, 701, 596, 752, 527, 752, 293, 751, 150, 664, 110, 479, 117, 335, 105, 258, 184, 297, 286, 387, 275, 432, 244, 487, 328, 555, 309, 628, 226, 663, 375, 634, 487, 464, 424, 320, 401, 263, 490, 287, 587, 450, 600
        ];

        // Link each point
        var curve = new Phaser.Curves.Spline(points);

        // Create a racing car
        var lemming = this.add.follower(curve, 450, 600, 'car1').setScale(0.6);

        // Let racing car follow path
        lemming.startFollow({
            duration: 17500,
            yoyo: false,
            repeat: 1,
            rotateToPath: true,
        });
    }

    update() {

    }
}
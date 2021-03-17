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
        this.add.image(500, 350, 'road').setScale(1.1);

        var car = this.physics.add.group({
            key: 'car1',
            setScale: { x: 0.6, y: 0.6}
        })
        // Get key inputs
        this.input.keyboard.on('keydown-A', function (event) {
            car.setVelocityX(-200, 10); // move car left
        });
        this.input.keyboard.on('keyup-A', function (event) {
            car.setVelocityX(0, 0); // stop car
        });
        this.input.keyboard.on('keydown-W', function (event) {
            car.setVelocityY(-200, 10); // move car up
        });
        this.input.keyboard.on('keyup-W', function (event) {
            car.setVelocityY(0, 0); // stop car
        });
        this.input.keyboard.on('keydown-D', function (event) {
            car.setVelocityX(200, 10); // move car right
        });
        this.input.keyboard.on('keyup-D', function (event) {
            car.setVelocityX(0, 0); // stop car
        });
        this.input.keyboard.on('keydown-S', function (event) {
            car.setVelocityY(200, 10); // move car down
        });
        this.input.keyboard.on('keyup-S', function (event) {
            car.setVelocityY(0, 0); // stop car
        });

        var points0 = [ // initialize point on road X and Y
            450, 600, 701, 596, 752, 527, 752, 293, 751, 150, 664, 110, 479, 117, 335, 105, 258, 184, 297, 286, 387, 275, 432, 244, 487, 328, 555, 309, 628, 226, 663, 375, 634, 487, 464, 424, 320, 401, 263, 490, 287, 587, 450, 600,
        ];
        var points1 = [ // initialize point on road X and Y
            450, 600, 697, 594, 751, 522, 752, 342, 754, 168, 671, 103, 519, 125, 326, 104, 255, 196, 314, 284, 428, 245, 491, 340, 561, 333, 639, 228, 652, 457, 395, 404, 271, 444, 275, 570, 450, 600
        ];
        // choose path to take
        var point = Phaser.Math.Between(0, 1);

        if (point == 0) {
            // Link each point
            var curve = new Phaser.Curves.Spline(points0);
        } else {
            // Link each point
            var curve = new Phaser.Curves.Spline(points1);
        }
        console.log('chosen path = ', point)
        // Create a racing car
        var lemming = this.add.follower(curve, 450, 600, 'car1').setScale(0.6);
        // choose car speed
        var duration = Phaser.Math.Between(17000, 18500);
        // Let racing car follow path
        console.log('race duration = ', duration)
        lemming.startFollow({
            duration: duration,
            yoyo: false,
            repeat: 1,
            rotateToPath: true,
        });
    }

    update() {

    }
}
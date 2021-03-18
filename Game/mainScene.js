var car;
var tracker1;
var tracker2;
var cursors;

class mainScene extends Phaser.Scene {
    

    constructor() {
        super('mainScene');
    }

    
    preload() {
        // load images or sounds
        this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');

        this.load.image('road', '../assets/road.png');
        this.load.image('car1', '../assets/audi.png');
        this.load.audio('engine', '../assets/Engine_07.wav');

        this.load.plugin('PathBuilder', "../assets/PathBuilder.js", 'PathBuilder');
    }

    create() {
        // define objects
        this.add.text(50, 50, 'start menu');
        this.add.image(500, 350, 'road').setScale(1.1);

        car = this.matter.add.image(450, 605, 'car1').setScale(0.6);
        car.setFrictionAir(0.1);
        car.setMass(10);

        this.matter.world.setBounds(200, 50, 600, 600);


        var points0 = [ // initialize point on road X and Y
            450,600,550,600,650,600,750,550,750,450,750,350,750,
            250,750,150,650,100,550,150,450,100,350,100,250,150,
            250,250,350,300,450,250,500,350,600,250,650,300,650,
            400,600,450,500,450,400,400,300,400,250,450,250,550,
            350,600,450,600,450,600
        ];
        var points1 = [ // initialize point on road X and Y
            450,600,550,600,650,600,750,550,750,450,730,345,758,
            244,752,134,650,100,540,122,450,100,335,91,250,150,
            250,250,350,300,440,240,504,344,600,250,658,258,662,
            359,638,470,532,468,436,406,324,385,268,452,269,556,
            350,600,450,600
        ];
        // choose path to take
        var point = Phaser.Math.Between(0, 1);

        if (point == 0) {
            // Link each point
            var curve = new Phaser.Curves.Spline(points0);} 
        else {
            // Link each point
            var curve = new Phaser.Curves.Spline(points1);}
    	console.log('chosen path = ', point)
        
        // Create a racing car
        var lemming = this.add.follower(curve, 450, 600, 'car1').setScale(0.6);
        // choose car speed
        var duration = Phaser.Math.Between(16000, 16750);
        // Let racing car follow path
        
        console.log('race duration = ', duration)
        lemming.startFollow({
            duration: duration,
            yoyo: false,
            repeat: 1,
            rotateToPath: true,
        });
        	
        cursors = this.input.keyboard.createCursorKeys();
    }

    update() {

        // get car colission
        var point1 = car.getTopRight();
        var point2 = car.getBottomRight();
        // move colision to car position

        // get iputs
        if (cursors.left.isDown)// turn car left
        {   
            Phaser.Physics.Matter.Matter.Body.setAngularVelocity(car.body, -0.02);
        }
        else if (cursors.right.isDown) // turn car right
        {
            Phaser.Physics.Matter.Matter.Body.setAngularVelocity(car.body, 0.02);
        }
    
        if (cursors.up.isDown) /// move car forward
        {
            car.thrust(0.005);
        }
        else if (cursors.down.isDown) // reverse car 
        {
            car.thrustBack(0.02);
        }

    }
}
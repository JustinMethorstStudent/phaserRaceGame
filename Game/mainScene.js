var car;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var car1;
var cursors;
var keys;
var finish

=======
var tracker1;
var tracker2;
var cursors;
>>>>>>> parent of bf611d5 (Little Changes to some files and added some in preperation)
=======
var tracker1;
var tracker2;
var cursors;
>>>>>>> parent of bf611d5 (Little Changes to some files and added some in preperation)
=======
var tracker1;
var tracker2;
var cursors;
>>>>>>> parent of d2b04f0 (a)

class mainScene extends Phaser.Scene {
    

    constructor() {
        super('mainScene');
    }

    
    preload() {
        // load images or sounds
        this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');

        //this.load.image('road', '../assets/road.png');
        this.load.image('road', '../assets/raceTracks/raceTrackFirst.png');
        this.load.image('car1', '../assets/audi.png');
        this.load.audio('engine', '../assets/Engine_07.wav');

        this.load.plugin('PathBuilder', "../assets/PathBuilder.js", 'PathBuilder');
    }

    create() {
        // define objects
        this.add.text(50, 50, 'start menu');
        this.add.image(500, 350, 'road').setScale(0.5);

        car = this.matter.add.image(450, 605, 'car1').setScale(0.6);
        car.setFrictionAir(0.2);
        car.setMass(10);

<<<<<<< HEAD
<<<<<<< HEAD
        car1 = this.matter.add.sprite(450,275, 'car4').setScale(0.22);
        car1.setFrictionAir(0.2);
        car1.setMass(10);
        
        var points0 = [448,270,550,250,650,250,750,250,750,150,850,
            150,850,250,850,350,850,450,830,533,750,550,700,500,700,
            400,600,400,583,499,548,564,444,560,350,550,250,550,117,
            554,72,501,136,450,150,350,150,250,165,170,250,150,340,
            167,350,250,447,270];

        var points1 = [450,260,549,268,648,259,750,250,761,146,850,
            150,850,250,850,350,850,450,817,530,724,526,700,450,629,
            382,571,438,554,564,456,573,354,541,250,550,150,544,72,
            500,146,428,150,350,150,250,187,161,339,158,350,250,450,260];
=======
        this.matter.world.setBounds(10, 50, 1000, 600);


        var points0 = [ // initialize point on road X and Y
            450,600,550,600,650,600,750,550,750,450,750,350,750,
            250,750,150,650,100,550,150,450,100,350,100,250,150,
            250,250,350,300,450,250,500,350,600,250,650,300,650,
            400,600,450,500,450,400,400,300,400,250,450,250,550,
            350,600,450,600
        ];

        // var points1 = [ // initialize point on road X and Y
        //     450,600,550,600,650,600,750,550,750,450,730,345,758,
        //     244,752,134,650,100,540,122,450,100,335,91,250,150,
        //     250,250,350,300,440,240,504,344,600,250,658,258,662,
        //     359,638,470,532,468,436,406,324,385,268,452,269,556,
        //     350,600,450,600
        // ];
>>>>>>> parent of d2b04f0 (a)

        var points1 = [447,270,447,270,563,273,666,266,732,268,
            756,240,764,177,773,142,808,134,835,148,836,175,840,
            215,841,256,839,288,837,331,840,366,841,417,838,455,
            838,506,799,533,750,534,716,528,699,480,698,429,681,
            399,622,393,581,405,573,441,569,488,568,522,546,575,
            496,575,456,572,413,549,382,542,295,543,244,543,180,
            542,112,543,80,521,85,489,105,473,129,464,156,442,
            158,408,158,384,160,357,155,331,154,292,156,258,154,
            226,156,193,180,165,208,165,241,162,268,163,308,163,
            335,165,349,172,364,198,371,233,375,256,403,271,426,
            270,447,270];

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
        var lemming = this.add.follower(curve, 447,270, 'car1').setScale(0.6);
        // choose car speed
<<<<<<< HEAD
        var duration = Phaser.Math.Between(14000, 15000);
        var add = Phaser.Math.Between(0, 1500);
        var add1 = Phaser.Math.Between(0, 1500);

=======
        this.matter.world.setBounds(10, 50, 1000, 600);


        var points0 = [ // initialize point on road X and Y
            450,600,550,600,650,600,750,550,750,450,750,350,750,
            250,750,150,650,100,550,150,450,100,350,100,250,150,
            250,250,350,300,450,250,500,350,600,250,650,300,650,
            400,600,450,500,450,400,400,300,400,250,450,250,550,
            350,600,450,600
        ];

        // var points1 = [ // initialize point on road X and Y
        //     450,600,550,600,650,600,750,550,750,450,730,345,758,
        //     244,752,134,650,100,540,122,450,100,335,91,250,150,
        //     250,250,350,300,440,240,504,344,600,250,658,258,662,
        //     359,638,470,532,468,436,406,324,385,268,452,269,556,
        //     350,600,450,600
        // ];

        var points1 = [447,270,447,270,563,273,666,266,732,268,
            756,240,764,177,773,142,808,134,835,148,836,175,840,
            215,841,256,839,288,837,331,840,366,841,417,838,455,
            838,506,799,533,750,534,716,528,699,480,698,429,681,
            399,622,393,581,405,573,441,569,488,568,522,546,575,
            496,575,456,572,413,549,382,542,295,543,244,543,180,
            542,112,543,80,521,85,489,105,473,129,464,156,442,
            158,408,158,384,160,357,155,331,154,292,156,258,154,
            226,156,193,180,165,208,165,241,162,268,163,308,163,
            335,165,349,172,364,198,371,233,375,256,403,271,426,
            270,447,270];

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
        var lemming = this.add.follower(curve, 447,270, 'car1').setScale(0.6);
        // choose car speed
        var duration = Phaser.Math.Between(12500, 14000);
<<<<<<< HEAD
>>>>>>> parent of bf611d5 (Little Changes to some files and added some in preperation)
=======
>>>>>>> parent of bf611d5 (Little Changes to some files and added some in preperation)
=======
        var duration = Phaser.Math.Between(12500, 14000);
>>>>>>> parent of d2b04f0 (a)
        // Let racing car follow path
        
        console.log('race duration = ', duration)
        lemming.startFollow({
            duration: duration,
            yoyo: false,
            repeat: 2,
            rotateToPath: true,
        });
        	
        cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        // get iputs
        if (cursors.left.isDown)// turn car left
        {   
            car.angle -= 3.3;
        }
        else if (cursors.right.isDown) // turn car right
        {
            car.angle += 3.3;
        }
    
        if (cursors.up.isDown) /// move car forward
        {
            car.thrust(0.025);
        }
        else if (cursors.down.isDown) // reverse car 
        {
            car.thrustBack(0.02);
        }

    }
}
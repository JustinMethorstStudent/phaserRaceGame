var car;
var car1;
var cursors;
var keys;
var finish;
var timedEvent;
var start = false;
var lemming;
var lemming1;
var lemming2;
var lemming3;
var length;
var length1;
var text;
var scoreText;
var highScoreText;
var score = 0;
var highScore = 0;
var oldScore;
var oldHighScore;

class mainScene extends Phaser.Scene {
    

    constructor() {
        super('');
        
    }

    preload() {
        //this.load.image('road', '../assets/road.png');
        this.load.image('road', '../assets/raceTracks/raceTrackFirst.png');
        this.load.image('car2', '../assets/player.png');
        this.load.image('car3', '../assets/Black_viper.png');
        this.load.image('finish', '../assets/image.png');
        this.load.image('redwin', '../assets/Red.png');
        this.load.image('orangewin', '../assets/Orange.png');
        this.load.image('car1', '../assets/audi.png');
        this.load.image('car4', '../assets/car.png');

    }

    create() {
        // define objects
        localStorage.removeItem('value');

        this.add.image(500, 350, 'road').setScale(0.5);

        lemming = this.add.follower(curve, 450,300, 'car3').setScale(0.22);
        lemming1 = this.add.follower(curve1, 450,280, 'car2').setScale(0.28);
        
        finish = this.matter.add.sprite(450,270, 'finish').setScale(0.1).setStatic(true).setSensor(true);
        finish.setMass(10);

        car = this.matter.add.sprite(450,240, 'car1').setScale(0.6);
        car.setFrictionAir(0.2);
        car.setMass(10);

        car1 = this.matter.add.sprite(450,255, 'car4').setScale(0.22);
        car1.setFrictionAir(0.2);
        car1.setMass(10);

        text = this.add.text(20, 100);
        scoreText = this.add.text(500, 100);
        highScoreText = this.add.text(300, 100);


        oldScore = localStorage.getItem('oldvalue');
        console.log(oldScore);

        oldHighScore = localStorage.getItem('value');
        highScoreText.setText('High Score: ' + oldHighScore);


        var points0 = [450,290,550,250,650,250,750,250,750,150,850,
            150,850,250,850,350,850,450,830,533,750,550,700,500,700,
            400,600,400,583,499,548,564,444,560,350,550,250,550,117,
            554,72,501,136,450,150,350,150,250,165,170,250,150,340,
            167,350,250,447,290];

        var points1 = [450,290,549,268,648,259,750,250,761,146,850,
            150,850,250,850,350,850,450,817,530,724,526,700,450,629,
            382,571,438,554,564,456,573,354,541,250,550,150,544,72,
            500,146,428,150,350,150,250,187,161,339,158,350,250,450,290];

        var points2 = [450, 0, 450, 2000];

            // Link each point
            var curve = new Phaser.Curves.Spline(points0);
            var curve1 = new Phaser.Curves.Spline(points1)
            var curve2 = new Phaser.Curves.Spline(points2)
        // Create a racing car
        lemming2 = this.add.follower(curve2, 450, -100, 'orangewin').setScale(1);
        lemming3 = this.add.follower(curve2, 450, -100, 'redwin').setScale(1);
        // choose car speed
        var duration = Phaser.Math.Between(14000, 15000);
        var add = Phaser.Math.Between(0, 1500);
        var add1 = Phaser.Math.Between(0, 1500);

        // Let racing car follow path
        length1 = duration+add1
        length  = duration+add
        console.log('race duration = ', length1, length)
        	
        cursors = this.input.keyboard.createCursorKeys();

        keys = this.input.keyboard.addKeys(
            {up:Phaser.Input.Keyboard.KeyCodes.W,
            down:Phaser.Input.Keyboard.KeyCodes.S,
            left:Phaser.Input.Keyboard.KeyCodes.A,
            right:Phaser.Input.Keyboard.KeyCodes.D});

            this.matterCollision.addOnCollideStart({
                objectA: car,
                objectB: finish,
                callback: () => chooseWinner('red')
              });
            this.matterCollision.addOnCollideStart({
                objectA: car1,
                objectB: finish,
                callback: () => chooseWinner('orange')
              });

              var redcount = 0;
              var orangecount = 0;

              function chooseWinner(winner){

                  if(winner == 'red'){
                    ++redcount;
                    console.log(redcount);
                    if (redcount == 4){
                        if(orangecount < 4){
                            lemming3.startFollow({
                                duration: 10000,
                                yoyo: false,
                                repeat: 0,
                            });
                            start = false;
                            localStorage.setItem('oldvalue', score);
                            if(oldScore > score){
                                highScoreText.setText('High Score: ' + highScore);
                                localStorage.setItem('value', highScore);
                            }
                        }
                    }
                  }
                  else if(winner == 'orange'){
                    ++orangecount;
                    console.log(orangecount);
                    if (orangecount == 4){
                        if(redcount < 4){
                            lemming2.startFollow({
                                duration: 10000,
                                yoyo: false,
                                repeat: 0,
                            });
                            start = false;
                            localStorage.setItem('oldvalue', score);
                            if(oldScore > score){
                                highScoreText.setText('High Score: ' + highScore);
                                localStorage.setItem('value', highScore);
                            }
                    }}
                }

              }
              timedEvent = this.time.delayedCall(3000, onEvent, [], this);
              score = 0;
    }

    update() {
        text.setText('Game starts on on 1: ' + timedEvent.getProgress().toString().substr(0, 3));
        scoreText.setText('Score: ' + score);



        if(start == true){
            ++score;
            highScore = score;


            
        // get iputs
        if (cursors.left.isDown)// turn car left
        {   
            car.angle -= 3.9;
        }
        else if (cursors.right.isDown) // turn car right
        {
            car.angle += 3.9;
        }
    
        if (cursors.up.isDown) /// move car forward
        {
            car.thrust(0.022);
        }
        else if (cursors.down.isDown) // reverse car 
        {
            car.thrustBack(0.02);
        }

        if (keys.left.isDown)// turn car left
        {   
            car1.angle -= 3.9;
        }
        else if (keys.right.isDown) // turn car right
        {
            car1.angle += 3.9;
        }
    
        if (keys.up.isDown) /// move car forward
        {
            car1.thrust(0.022);
        }
        else if (keys.down.isDown) // reverse car 
        {
            car1.thrustBack(0.02);
        }
        }
    }
    
    
}
function onEvent ()
{
    start = true;
    lemming.startFollow({
        duration: length,
        yoyo: false,
        repeat: 2,
        rotateToPath: true,
    });

    lemming1.startFollow({
        duration: length1,
        yoyo: false,
        repeat: 2,
        rotateToPath: true,
    });
}
class mainScene extends Phaser.Scene {
    constructor (){
        super('mainScene');
    }
    preload()
    {
    // load images or sounds
    }
    create()
    {
    // define objects
    console.log('hello')
    this.add.text(50, 50, 'start menu')
    }
    update()
    {
    //constant running loop
    }

}
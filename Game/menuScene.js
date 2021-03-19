class menuScene extends Phaser.Scene {

        config = {
            type: Phaser.AUTO,
            scale: {
                mode: Phaser.Scale.RESIZE,
                parent: 'phaser-example',
                width: '100%',
                height: '100%=='},
            backgroundColor: "#fff",
            parent: 'phaser-game',
            scene: [menuScene]}


    init() {

    }

    preload() {

        this.load.image("menuBackGround", "./assets/menuScene/menuBackGround.png")
        this.load.image("playButton", "./assets/menuScene/playButton.png")

    }

    create() {
            this.add.image(200,200, "menuBackGround")

    }

    update(){}


    game = new Phaser.Game(config);
}
// const phaserGame = document.createElement('script');
// phaserGame.setAttribute('src','//cdn.jsdelivr.net/npm/phaser@3.53.1/dist/phaser.js');
// document.head.appendChild(phaserGame);

let codey;

function preload() {
    this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');
}

function create() {
    this.add.text(50, 50, 'start menu');
    codey = this.add.sprite(30, 200, 'codey');
}

const config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 800,
    backgroundColor: "#5ce835",
    scene: {
        create,
        preload,

    },

}

const game = new Phaser.Game(config);
// const phaserGame = document.createElement('script');
// phaserGame.setAttribute('src','//cdn.jsdelivr.net/npm/phaser@3.53.1/dist/phaser.js');
// document.head.appendChild(phaserGame);

function create() {
    this.add.text(50, 50, 'start menu')
}

const config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 800,
    backgroundColor: "#5ce835",
    scene: {create},

}

const game = new Phaser.Game(config);
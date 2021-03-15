// const phaserGame = document.createElement('script');
// phaserGame.setAttribute('src','//cdn.jsdelivr.net/npm/phaser@3.53.1/dist/phaser.js');
// document.head.appendChild(phaserGame);
var game;
window.onload=function()
{
var config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 800,
    backgroundColor: "#5ce835",
    parent: 'phaser-game',
    scene: [mainScene]
}

game = new Phaser.Game(config);
}
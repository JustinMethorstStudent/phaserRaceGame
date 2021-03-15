// const phaserGame = document.createElement('script');
// phaserGame.setAttribute('src','//cdn.jsdelivr.net/npm/phaser@3.53.1/dist/phaser.js');
// document.head.appendChild(phaserGame);
var game;
window.onload=function()
{
var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'phaser-example',
        width: '100%',
        height: '100%'},
    backgroundColor: "#5ce835",
    parent: 'phaser-game',
    scene: [mainScene]
}

game = new Phaser.Game(config);
}
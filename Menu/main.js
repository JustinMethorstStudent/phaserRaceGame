window.onload=function()
{
var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'phaser-example',
        width: '100%',
        height: '100%'},
    backgroundColor: "#fff",
    parent: 'menu',
    scene: [menuScene]
}

Game = new Phaser.Game(config);
}
window.onload=function()
{
var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,
        width: '100%',
        height: '100%'},
    backgroundColor: "#fff",
    parent: 'menu',
    scene: [menuScene]
}

game = new Phaser.Game(config);
}
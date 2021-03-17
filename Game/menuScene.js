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
    backgroundColor: "#fff",
    parent: 'menu',
    scene: [preload, create]
}
game = new Phaser.Game(config);
}
preload()
{
    //laden van plaatjes

    this.load.image("playBtn", "./assets/play.png");
    this.load.image("hndBtn", "./assets/handleiding.png");
    this.load.image("car", "./assets/car.png");

}
create()
{
    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0,20, "logo").setDepth(1);
    let playBtn = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "playBtn").setDepth(1);
    let hndBtn = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "hndBtn").setDepth(1);

    let hoverSprite = this.add.image(100, 100, "car");
    hoverSprite.setScale(2);
    hoverSprite.setVisible(false);

    playBtn.setinteractive();
    
    playBtn.on("pointerover",()=>
    {
        hoverSprite.setVisible(true);
        hoverSprite.x = playBtn.x - playBtn.width;
        hoverSprite.y = playBtn.y;
    });
    playBtn.on("pointerout",()=>{
        hoverSprite.setVisible(false);
    })
    playBtn.on("pointerup",()=>{
        
    })
};
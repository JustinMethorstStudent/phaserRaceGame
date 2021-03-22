window.onload=function(){
    let config = {
        type: Phaser.AUTO,
        scale: {
            mode: Phaser.Scale.RESIZE,
            parent: 'phaser-example',
            width: '100%',
            height: '100%'},
        backgroundColor: "#fff",
        parent: 'phaser-game',
        physics: {
            default: 'matter',
            matter: {
                debug: true,
                gravity: {
                    x: 0,
                    y: 0
                }
            }
        },
        fps: {
          target: 60,
          forceSetTimeOut: true
          },
        scene: [mainScene],
        plugins: {
            scene: [
              {
                plugin: PhaserMatterCollisionPlugin, // The plugin class
                key: "matterCollision", // Where to store in Scene.Systems, e.g. scene.sys.matterCollision
                mapping: "matterCollision" // Where to store in the Scene, e.g. scene.matterCollision
              }
            ]
          }
        };
      
    game = new Phaser.Game(config);
    }
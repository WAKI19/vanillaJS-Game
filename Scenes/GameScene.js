class GameScene {
    constructor(game) {
        this.game = game;
    }
  
    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.font = '24px sans-serif';
        ctx.fillText('ゲーム画面', 50, this.game.height/2);
    }
  
    onKeyDown(key) {
        
    }

    onKeyUp(key) {
        
    }
}
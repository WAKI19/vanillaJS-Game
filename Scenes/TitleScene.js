class TitleScene {
    constructor(game) {
      this.game = game;
    }
  
    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.font = '24px sans-serif';
        ctx.fillText('タイトル画面 - Enterで開始', 50, this.game.height/2);
    }
  
    onKeyDown(key) {
      if (key === 'Enter') {
        this.game.changeScene(new GameScene(this.game));
      }
    }
}
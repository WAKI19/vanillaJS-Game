class TitleScene {
    constructor(game) {
      this.game = game;
    }
  
    update(deltaTime) {
        this.x += this.speed * deltaTime;
        this.y += this.speed * deltaTime;
    }
  
    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.font = '24px sans-serif';
        ctx.fillText('タイトル画面 - Enterで開始', 50, this.game.height/2);
        drawRect(ctx, 0, 0, 50, 50, 'white');
    }
  
    onKeyDown(e) {
      if (e.code === 'Enter') {
        this.game.changeScene(new StageSelectScene(this.game));
      }
    }
}

class StageSelectScene {
    constructor(game) {
        this.game = game;
    }
    
    update(deltaTime) {
        
    }
  
    draw(ctx) {
        
    }
  
    onKeyDown(e) {
      
    }
}
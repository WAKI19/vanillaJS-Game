class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.lastTime = 0;
        
        this.currentScene = new TitleScene(this);
    }

    changeScene(scene) {
        this.currentScene = scene;
    }

    update(deltaTime) {
        this.currentScene.update(deltaTime);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.currentScene.draw(this.ctx);
    }

    loop(currentTime) {
        // 初回は0なので、差分を正しく計算
        const deltaTime = (currentTime - this.lastTime) / 1000; // 秒単位
        this.lastTime = currentTime;

        this.update(deltaTime);
        this.draw();

        requestAnimationFrame(this.loop.bind(this)); // thisを維持するためにbind
    }

    handleKeyDown(e) {
        if (this.currentScene.onKeyDown) {
          this.currentScene.onKeyDown(e);
        }
    }

    start() {
        requestAnimationFrame(this.loop.bind(this));
    }
}

window.addEventListener('load', function() {
    const canvas = this.document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const game = new Game(canvas, ctx);

    window.addEventListener('keydown', e => {
        game.handleKeyDown(e);
    });

    game.start();
});
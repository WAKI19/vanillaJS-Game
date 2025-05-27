class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.lastTime = 0;
        this.deltaTime = 0;
        this.keyStates = {
            ArrowLeft: false,
            ArrowRight: false
        };
        
        this.currentScene = new TitleScene(this);
    }

    update() {
        this.currentScene.update?.();
    }

    draw(ctx) {
        this.currentScene.draw(ctx);
    }

    changeScene(newScene) {
        this.currentScene = newScene;
    }

    loop(currentTime) {
        // 初回は0なので、差分を正しく計算
        this.deltaTime = (currentTime - this.lastTime) / 1000; // 秒単位
        this.lastTime = currentTime;

        this.ctx.clearRect(0, 0, this.width, this.height);
        this.update();
        this.draw(this.ctx);

        requestAnimationFrame(this.loop.bind(this)); // thisを維持するためにbind
    }

    onKeyDown(key) {
        this.keyStates[key] = true;
        this.currentScene.onKeyDown?.(key);
    }

    onKeyUp(key) {
        this.keyStates[key] = false;
        this.currentScene.onKeyUp?.(key);
    }

    start() {
        requestAnimationFrame(this.loop.bind(this));
    }
}
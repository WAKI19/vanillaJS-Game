window.addEventListener('load', function() {
    const canvas = this.document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const game = new Game(canvas, ctx);

    document.addEventListener("keydown", (e) => game.onKeyDown(e.key));
    document.addEventListener("keyup", (e) => game.onKeyUp(e.key));

    game.start();
});
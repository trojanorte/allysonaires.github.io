window.onload = function () {
    let canvas = document.getElementById('starCanvas');
    let ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawStars();
    }

    function drawStars() {
        let numStars = 200; // Ajuste o número de estrelas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";

        for (let i = 0; i < numStars; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let size = Math.random() * 2;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
};

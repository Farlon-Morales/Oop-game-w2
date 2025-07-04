const playerElm = document.getElementById("player");

const player = {
    positionY: 0,
    positionX: 0,
    width: 3,
    height: 5
};

// Apply initial position and size to the player
playerElm.style.width = player.width + "vw";
playerElm.style.height = player.height + "vh";
playerElm.style.left = player.positionX + "vw";
playerElm.style.bottom = player.positionY + "vh";

// Handle key movements
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        if (player.positionY + player.height < 100) {
            player.positionY += 2;
            playerElm.style.bottom = player.positionY + "vh";
        }
    } else if (e.key === "ArrowDown") {
        if (player.positionY > 0) {
            player.positionY -= 2;
            playerElm.style.bottom = player.positionY + "vh";
        }
    } else if (e.key === "ArrowLeft") {
        if (player.positionX > 0) {
            player.positionX -= 1;
            playerElm.style.left = player.positionX + "vw";
        }
    } else if (e.key === "ArrowRight") {
        if (player.positionX + player.width < 100) {
            player.positionX += 1;
            playerElm.style.left = player.positionX + "vw";
        }
    }
});

// Class for obstacles
class Wave {
    constructor(positionY, height) {
        this.width = 1;
        this.height = height;
        this.positionX = 80;
        this.positionY = positionY
        this.speed = 3;
        this.waveElm = null;

        this.createDomElement();
        this.setLayout();
    }

    createDomElement() {
        this.waveElm = document.createElement("div");
        this.waveElm.className = "wave";
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.waveElm);
    }

    setLayout() {
        this.waveElm.style.width = this.width + "vw";
        this.waveElm.style.height = this.height + "vh";
        this.waveElm.style.left = this.positionX + "vw";
        this.waveElm.style.bottom = this.positionY + "vh";
    }

    moveLeft() {
        this.positionX--;
        this.setLayout();
    }
}

const allWavesArr = [];

// Create waves
setInterval(() => {
    const randomHeight = Math.random() * (30 - 1) + 1; // random height between 1 and 30
    const maxY = 100 - randomHeight;                   // ensure wave stays within bounds
    const randomY = Math.random() * maxY;

    const newWaves = new Wave(randomY, randomHeight);
    allWavesArr.push(newWaves);
}, 800);

// Move waves & collision
setInterval(() => {
    allWavesArr.forEach((waveInstance) => {
        waveInstance.moveLeft();

        if (
            player.positionX < waveInstance.positionX + waveInstance.width &&
            player.positionX + player.width > waveInstance.positionX &&
            player.positionY < waveInstance.positionY + waveInstance.height &&
            player.positionY + player.height > waveInstance.positionY
        ) {
            console.log("collision detected");
          
        }
    });
}, 100);
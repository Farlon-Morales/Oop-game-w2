
const playerElm = document.getElementById(`player`);

let positionY = 0; // vertical position 

document.addEventListener('keydown', (e) => {
    if (e.key === 'p') {
        console.log(`Move up`);
        positionY += 10;
        playerElm.style.bottom = positionY + 'px';
    } else if (e.key === 'q') {
        console.log('Move down');
        positionY -= 10;
        playerElm.style.bottom = positionY + 'px';

    }
});

class Obstacle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.positionX = positionX; // 100
        //this.newWave = newWave
        //this.lionfish = lionFish

        this.createDomElement();
    }

    createDomElement() {
        const newWave = document.createElement("div");
        //const lionFish = document.createElement("div");

        newWave.className = "wave";
        //lionFish.className = "lionFish";

        const parentElm = document.getElementById("board");
        parentElm.appendChild(newWave);
        //parentElm.appendChild(lionFish);
    }
}


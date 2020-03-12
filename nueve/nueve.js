function generateRandom(min, max){
    return Math.floor(min + Math.random() * (max + 1 - min)); 
}

class Color{
    constructor(){
        this.r = generateRandom(0,255);
        this.g = generateRandom(0,255);
        this.b = generateRandom(0,255);
    }
    getColor(){
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    }
}
const staticContainer = document.getElementById('static-container');
const crazyContainer = document.getElementById('crazy-container');

const setColor = function(identifier){
    const blocks = document.getElementsByClassName(identifier);
    [...blocks].forEach(element => {
        const color = new Color()
        element.style.backgroundColor = color.getColor();
    });
};

const generateBlocks = function(){
    staticContainer.innerHTML = `<div class='block'></div>`.repeat(25);
    setColor('block');
};
generateBlocks();

const generateBlocksInterval = function(){
    crazyContainer.innerHTML = `<div class='crazy-block'></div>`.repeat(25);
    setInterval(() => {
        setColor('crazy-block');
    }, 1000);
};
generateBlocksInterval();
//alert('hello world!');

let canvas = document.getElementById('canvas');
canvas.height = 400;
canvas.width = 400;

let brush = canvas.getContext('2d');
brush.fillStyle = 'pink';
brush.fillRect(0, 0, canvas.width, canvas.height);

class sprite {
    constructor(height, width, color, xPos, yPos, /*xSpeed = 0, ySpeed = 0*/){
        this.height = height;
        this.width = width;
        this.color = color;
        this.xPos = xPos;
        this.yPos = yPos;
        //this.xSpeed = ySpeed;
        //this.ySpeed = ySpeed;
        
        //alert('constructor');
    }
    
    draw(){
        //alert('drawn');
        brush.fillStyle = this.color;
        brush.fillRect(this.xPos, this.yPos, this.width, this.height);
    }
    
    update(){
        this.draw();
        this.xPos += this.xSpeed;
        this.yPos += this.ySpeed;
    }
}

let sprite1 = new sprite(50, 50, 'orange', 0, 0, 1, 1);
sprite1.draw();

// Sprites array
let sprites = [sprite1];

function mainLoop(){
    brush.clearRect(0, 0, canvas.width, canvas.height);
    
    brush.fillStyle = 'pink';
    brush.fillRect(0, 0, canvas.width, canvas.height);
    
    // Display sprites
    /*for(let i = 0; i < sprites.length; i++){
        sprites[0].update();
    }*/
    sprite1.draw();

    window.requestAnimationFrame(mainLoop);
}

mainLoop();

// Thanks to https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var larghezza = 126 / 4;
var altezza = 254 / 4; 
var angolazioneGradi = 90;
var spostamento = 15
var car_01;
// thanks to https://youtu.be/-wSn49DV9qU?si=70AgLI9cPVMS99et
var carPosX = 20;
var carPosY = 210;
var speed = 1;
var dx = 0; 
var dy = 0;

// thanks to Gemini (non sapevo come ruotare un'immagine)
function disegnaAuto(img, carPosX, carPosY, larghezza, altezza, angolazioneGradi) {
    // 1. Salva lo stato attuale del canvas (posizione 0,0, rotazione attuale, ecc.)
    ctx.save();

    // 2. Trasla l'origine nel punto in cui vuoi che stia l'auto
    ctx.translate(carPosX + larghezza / 2, carPosY + altezza / 2);

    // 3. Ruota il canvas dei gradi desiderati (es. 90)
    ctx.rotate(angolazioneGradi * Math.PI / 180)

    // 4. Disegna l'immagine centrata nell'origine traslata
    ctx.drawImage(img, -larghezza / 2, - altezza / 2, larghezza, altezza)

    ctx.restore();
}

function draw() {
    // canvas = document.getElementById('canvas');
    // ctx = canvas.getContext('2d');
    
    car_01 = new Image();
    car_01.src = 'images/car_01.png';
    car_01.onload = function() {
        // ctx.drawImage(car_01, car_pos_x, car_pos_y);
        disegnaAuto(car_01, carPosX, carPosY, larghezza, altezza, angolazioneGradi);
    };
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function goNorth() {
    speed = 1;
    angolazioneGradi = 0;
    // carPosY -= spostamento;
    dx = 0;
    dy = -1 * speed;
    disegnaAuto(car_01, carPosX, carPosY, larghezza, altezza, angolazioneGradi);
    clear();
    draw();
}

function goSouth() {
    speed = 1;
    angolazioneGradi = 180
    // carPosY += spostamento;
    dx = 0;
    dy = 1 * speed;
    disegnaAuto(car_01, carPosX, carPosY, larghezza, altezza, angolazioneGradi);
    clear();
    draw()
}

function goOvest() {
    speed = 1;
    angolazioneGradi = 270 
    // carPosX -= spostamento;
    dx = -1 * speed;
    dy = 0;
    disegnaAuto(car_01, carPosX, carPosY, larghezza, altezza, angolazioneGradi);
    clear();
    draw()
}

function goEast() {
    speed = 1;
    angolazioneGradi = 90
    // carPosX += spostamento;
    dx = 1 * speed; 
    dy = 0;
    disegnaAuto(car_01, carPosX, carPosY, larghezza, altezza, angolazioneGradi);
    clear();
    draw();
}

function stop() {
    dx = 0;
    dy = 0;
}

function update() {
    draw(ctx);
    carPosX += dx;
    carPosY += dy;
    // clear();
}

let updateCar = function() {
    requestAnimationFrame(updateCar);
    update();
}


updateCar();


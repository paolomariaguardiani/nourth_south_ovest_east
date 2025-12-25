// Thanks to https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const car_01 = new Image();
car_01.src = 'images/car_01.png';
const apple_01 = new Image();
apple_01.src = 'images/apple_01.png';

var larghezza = 126 / 4;
var altezza = 254 / 4; 
var angolazioneGradi = 90;
var spostamento = 15
// thanks to https://youtu.be/-wSn49DV9qU?si=70AgLI9cPVMS99et
var carPosX = 20;
var carPosY = 210;
var speed = 1;
var dx = 0; 
var dy = 0;

var applePosX = 275;
var applePosY = 100;


var applePosXs = [275, 520, 820, 250, 545, 810, 920]; // lista delle possibili coordinate x in cui si può trovare la mela
var applePosYs = [100, 70,  40,  400, 300, 345, 415]; // lista delle possibili coordinate y in cui si può trovare la mela


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
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    disegnaAuto(car_01, carPosX, carPosY, larghezza, altezza, angolazioneGradi);
    ctx.drawImage(apple_01, applePosX, applePosY, 40, 40);
}

// function clear() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

function goNorth() {
    angolazioneGradi = 0;
    dx = 0;
    dy = -1;
}

function goSouth() {
    angolazioneGradi = 180;
    dx = 0;
    dy = 1;
}

function goOvest() {
    angolazioneGradi = 270;
    dx = -1;
    dy = 0;
}

function goEast() {
    angolazioneGradi = 90;
    dx = 1;
    dy = 0;
}

function stop() {
    dx = 0;
    dy = 0;
}

// thanks to https://youtu.be/tCPcinx3h-g?list=PLN0tvDAN1yvSNbkHAwPzJ5O4pP_e2vyme
function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(
        Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
    );
}

console.log("Ciao");
console.log(carPosX, carPosY, applePosX, applePosY);

// Per scegliere un numero casuale. https://gabrieleromanato.com/2020/08/javascript-come-selezionare-un-elemento-casuale-random-da-un-array
const getRandomInt = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max-min + 1)) + min; 
}

function update() {
    carPosX += dx;
    carPosY += dy;

    draw();

    if (getDistance(carPosX, carPosY, applePosX, applePosY) < 50) {
        console.log("🍎 presa!");
        dx = 0; 
        dy = 0;
        var indexCasuale = getRandomInt(0, applePosXs.length - 1);
        console.log(indexCasuale);
        applePosX = applePosXs[indexCasuale];
        applePosY = applePosYs[indexCasuale];
    }

    requestAnimationFrame(update);
}

update();


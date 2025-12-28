// Carico i suoni
var clacson = new Howl({
    src: ['audio/double-car-horn.mp3'],
    volume: 0.06
});
var clacson2 = new Howl({
    src: ['audio/old-car-horn.mp3'],
    volume: 0.05
});
var clacson3 = new Howl({
    src: ['audio/goofy-ahh-car-horn.mp3'],
    volume: 0.02
});
var car_engine_01 = new Howl({
    src: ['audio/car-engine-start-outside.mp3'],
    loop: true,
    volume: 0.09
});
var car_engine_02 = new Howl({
    src: ['audio/car-engine-start-outside_02.mp3'],
    loop: true,
    volume: 0.09
});
// car_engine_01.play(); // faccio partire subito il suono del motore
// engine_status mi serve per scegliere se far partire car_engine_01 o car_engine_02
var engine_status = "off";
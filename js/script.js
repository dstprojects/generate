var dial, master, analyzer;
var sound1, sound2, sound3;
var arraySound;


//Loading audio files

function preload(){
    soundFormats('mp3');
    
    sound1 = loadSound('assets/Traje azul 1.mp3')
    sound2 = loadSound('assets/Reggaeton Barroco (Sin Beat).mp3')
    sound3 = loadSound('assets/City Ambience Sound - City Background Sound Effect.mp3')
    
    arraySound = new Array(sound1, sound2, sound3);
}

function setup(){
    
    sound1.setVolume(1);
    sound2.setVolume(1);
    sound3.setVolume(1);
    
    dial = new Nexus.Dial('#dial',{
        'size': [75,75],
        'interaction': 'radial', // "radial", "vertical", or "horizontal"
        'mode': 'relative', // "absolute" or "relative"
        'min': 0,
        'max': 1,
        'step': 0.1,
        'value': 0.5
})
    
    analyzer = new p5.Amplitude();
    
    createCanvas(1000,100);
    background(0);
    
}

function draw(){
    
    master = dial.value;
    masterVolume(master,0,0);
    
    var rms = analyzer.getLevel();
    background(rms*1100);
    
    //resizeCanvas(rms*3000, 100);
    
}   
   
function play(m){
    arraySound[m].play();
    analyzer.setInput(arraySound[m]);
}

function pause(m){
    arraySound[m].pause();
}

function stop(m){
    arraySound[m].stop();
}

function next(m,n){
    arraySound[n].stop();
    arraySound[m].play();
    analyzer.setInput(arraySound[m]);
}

function prev(m,n){
    arraySound[n].stop();
    arraySound[m].play();
    analyzer.setInput(arraySound[m]);
}











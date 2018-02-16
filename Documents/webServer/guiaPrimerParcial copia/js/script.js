

//          SEQUENCER

var playButton, stopButton;
var isPlaying = 0;
var sounds = ['kick','perc','snare','tom','closedHH'];

function setup() {
    createCanvas(100, 100);
    background(0);
    playButton = createButton('Play');
    playButton.position(19, 350);
    playButton.mousePressed(playSeq);
    
    stopButton = createButton('Stop');
    stopButton.position(59, 350);
    stopButton.mousePressed(stopSeq);

}

function preload(){
    
    sounds[0] = loadSound('sounds/kick.wav');
    
    sounds[1] = loadSound('sounds/perc.wav');
    
    sounds[2] = loadSound('sounds/snare.wav');
    
    sounds[3] = loadSound('sounds/tom.wav');
    
    sounds[4] = loadSound('sounds/closedHH.wav');
    
    
}


function playSeq(){
    if(isPlaying == 0){
        sequencer.start();
        isPlaying = 1;
    }
}

function stopSeq(){
    
    sequencer.stop();
    isPlaying = 0;
}

function playStep(v){
    
    for(i=0; i<v.length; i++){
        if(v[i] == 1){
            sounds[i].play();
        }
    }
}


//          PIANO


var osc = new p5.SinOsc(440);
osc.amp(0.2);
var freq;



function keyPressed(note){
    
    freq = midiToFreq(note.note);
    console.log(freq);
    
    if(note.state){
        osc.freq(freq);
        osc.start();
        
    }else{
        osc.stop();
    }
}









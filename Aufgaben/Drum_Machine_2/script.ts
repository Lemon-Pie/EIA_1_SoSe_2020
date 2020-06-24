window.addEventListener("load", function (): void {

// Mostly all var's
var allsamples: string [] = ["samples/A.mp3", "samples/C.mp3", "samples/F.mp3", "samples/G.mp3", "samples/hihat.mp3", "samples/kick.mp3", "samples/laugh-1.mp3", "samples/laugh-2.mp3", "samples/snare.mp3"];
var pb: HTMLElement = document.querySelector("#play");
var player: number;
var recording: boolean = false;
var dreisamples: string[] = ["samples/kick.mp3", "samples/kick.mp3", "samples/snare.mp3"];

// -------------- 7.1 --------------

document.querySelector("#button1").addEventListener("click", function(): void {playSample(0); });
document.querySelector("#button2").addEventListener("click", function(): void {playSample(1); });
document.querySelector("#button3").addEventListener("click", function(): void {playSample(2); });
document.querySelector("#button4").addEventListener("click", function(): void {playSample(3); });
document.querySelector("#button5").addEventListener("click", function(): void {playSample(4); });
document.querySelector("#button6").addEventListener("click", function(): void {playSample(5); });
document.querySelector("#button7").addEventListener("click", function(): void {playSample(6); });
document.querySelector("#button8").addEventListener("click", function(): void {playSample(7); });
document.querySelector("#button9").addEventListener("click", function(): void {playSample(8); });

// -------------- 8 --------------


// Zentrale Funktion (Teile von 7)

function playSample(soundplay: number): void { 
   var sound: HTMLAudioElement = new Audio(allsamples[soundplay]);
   sound.play();

   if (recording == true) {
        dreisamples.push(allsamples[soundplay]);
    }
} 


// Play - Stop - Button

pb.addEventListener("click", function(): void {

    if (pb.getAttribute("class") == "fas fa-play") {
        pb.setAttribute("class", "fas fa-stop");
        playbeat();
    } else {
        pb.setAttribute("class", "fas fa-play");
        clearInterval(player);
    }
});

function playbeat(): void {
    var index: number = 0;
    player = setInterval (function(): void {
        var beat: HTMLAudioElement = new Audio(dreisamples[index]);
        beat.play();
        index += 1; 
        if (index >= dreisamples.length) { 
            index = 0; 
        }
    },                    550);
}


// Record - Button

document.querySelector("#mic").addEventListener("click", function(): void {letsrecord(); });

function letsrecord(): void {
    if (recording) {
        recording = false;
    } else {
        recording = true;
    }
}
    
// Delete - Button
    
document.querySelector("#trash").addEventListener("click", function(): void {stopmusic(); });
    
function stopmusic(): void {
    dreisamples.length = 3;
}
    
});
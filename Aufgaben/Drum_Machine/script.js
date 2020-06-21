// All Samples
var allsamples = ["samples/A.mp3", "samples/C.mp3", "samples/F.mp3", "samples/G.mp3", "samples/hihat.mp3", "samples/kick.mp3", "samples/laugh-1.mp3", "samples/laugh-2.mp3", "samples/snare.mp3"];
// -------------- Teil 1 --------------
window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("click", function () { playSample(0); });
    document.querySelector("#button2").addEventListener("click", function () { playSample(1); });
    document.querySelector("#button3").addEventListener("click", function () { playSample(2); });
    document.querySelector("#button4").addEventListener("click", function () { playSample(3); });
    document.querySelector("#button5").addEventListener("click", function () { playSample(4); });
    document.querySelector("#button6").addEventListener("click", function () { playSample(5); });
    document.querySelector("#button7").addEventListener("click", function () { playSample(6); });
    document.querySelector("#button8").addEventListener("click", function () { playSample(7); });
    document.querySelector("#button9").addEventListener("click", function () { playSample(8); });
    function playSample(soundplay) {
        var sound = new Audio(allsamples[soundplay]);
        sound.play();
    }
    // -------------- Teil 2 -------------- (Grooooßes Dankeschön an die Hiwi Hannah)
    function playbeat() {
        var index = 0;
        setInterval(function () {
            var beat = new Audio(allsamples[index]);
            beat.play();
            index += 1;
        }, 500);
    }
    document.querySelector("#playbutton").addEventListener("click", playbeat);
});

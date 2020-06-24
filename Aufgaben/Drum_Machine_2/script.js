window.addEventListener("load", function () {
    // Mostly all var's
    var allsamples = ["samples/A.mp3", "samples/C.mp3", "samples/F.mp3", "samples/G.mp3", "samples/hihat.mp3", "samples/kick.mp3", "samples/laugh-1.mp3", "samples/laugh-2.mp3", "samples/snare.mp3"];
    var pb = document.querySelector("#play");
    var player;
    var recording = false;
    var dreisamples = ["samples/kick.mp3", "samples/kick.mp3", "samples/snare.mp3"];
    // -------------- 7.1 --------------
    document.querySelector("#button1").addEventListener("click", function () { playSample(0); });
    document.querySelector("#button2").addEventListener("click", function () { playSample(1); });
    document.querySelector("#button3").addEventListener("click", function () { playSample(2); });
    document.querySelector("#button4").addEventListener("click", function () { playSample(3); });
    document.querySelector("#button5").addEventListener("click", function () { playSample(4); });
    document.querySelector("#button6").addEventListener("click", function () { playSample(5); });
    document.querySelector("#button7").addEventListener("click", function () { playSample(6); });
    document.querySelector("#button8").addEventListener("click", function () { playSample(7); });
    document.querySelector("#button9").addEventListener("click", function () { playSample(8); });
    // -------------- 8 --------------
    // Zentrale Funktion (Teile von 7)
    function playSample(soundplay) {
        var sound = new Audio(allsamples[soundplay]);
        sound.play();
        if (recording == true) {
            dreisamples.push(allsamples[soundplay]);
        }
    }
    // Play - Stop - Button
    pb.addEventListener("click", function () {
        if (pb.getAttribute("class") == "fas fa-play") {
            pb.setAttribute("class", "fas fa-stop");
            playbeat();
        }
        else {
            pb.setAttribute("class", "fas fa-play");
            clearInterval(player);
        }
    });
    function playbeat() {
        var index = 0;
        player = setInterval(function () {
            var beat = new Audio(dreisamples[index]);
            beat.play();
            index += 1;
            if (index >= dreisamples.length) {
                index = 0;
            }
        }, 550);
    }
    // Record - Button
    document.querySelector("#mic").addEventListener("click", function () { letsrecord(); });
    function letsrecord() {
        if (recording) {
            recording = false;
        }
        else {
            recording = true;
        }
    }
    // Delete - Button
    document.querySelector("#trash").addEventListener("click", function () { stopmusic(); });
    function stopmusic() {
        dreisamples.length = 3;
    }
});

window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            todoliste.unshift({ todoText: wildcard, todosChecked: false });
            drawListToDOM();
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
var artyom = new Artyom();
// Add a single command
var commandHello = {
    indexes: ["hello", "good morning", "hey"],
    action: function () {
        artyom.say("Hey buddy ! How are you today?");
    }
};
artyom.addCommands(commandHello); // Add the command with addCommands method. Now
// Or add multiple commands at time
var myGroup = [
    {
        description: "If my database contains the name of a person say something",
        smart: true,
        // Ways to trigger the command with the voice
        indexes: ["Do you know who is *", "I don't know who is *", "Is * a good person"],
        // Do something when the commands is triggered
        action: function (i, wildcard) {
            var database = ["Carlos", "Bruce", "David", "Joseph", "Kenny"];
            //If the command "is xxx a good person" is triggered do, else
            if (i == 2) {
                if (database.indexOf(wildcard.trim())) {
                    artyom.say("I'm a machine, I dont know what is a feeling");
                }
                else {
                    artyom.say("I don't know who is " + wildcard + " and i cannot say if is a good person");
                }
            }
            else {
                if (database.indexOf(wildcard.trim())) {
                    artyom.say("Of course i know who is " + wildcard + ". A really good person");
                }
                else {
                    artyom.say("My database is not big enough, I don't know who is " + wildcard);
                }
            }
        }
    }
];

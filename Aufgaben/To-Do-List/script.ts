// select the elements

const list = document.getElementById("list"); // Wo die Items sind
const input = document.getElementById("input"); //Was der User eintippt 

// classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variablen
/*
let LIST = []   // ist ein leeres array das automatisch durch user gefüllt wird
    , id = 0;   // auflistung startet bei 0 und wird später mit id++ immer um eins gesteigert
*/
let LIST, id;

let data = localStorage.getItem("TODO"); // item wird vom lokalen speicher aufgerufen 

// überprüfen ob data leer ist oder nicht
if(data){ // ja, ist was drin
    LIST = JSON.parse(data);
    id = LIST.length; // setze die id auf die letzte mögliche in der Liste
    loadList(LIST); // die Liste wird dem User angezeigt
}else{ //nein, ist nichts drin weil Seite zum ersten Mal aufgerufen wird
    LIST = [];
    id = 0;
}

function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

// add function todo

function addToDo(toDo, id, done, trash){

    if(trash) {return; } //wenn item in trash dann wird der code darunter nicht ausgeführt (return=stoppen)

    const DONE = done ? CHECK : UNCHECK; // if todo is fertig then use CHECK, else (also nicht fertig) use UNCHECK
    const LINE = done ? LINE_THROUGH : ""; // if todo fertig then use LINE_TROUGH, else mach nichts

    const item = `<li class="item"><i class="fa ${DONE} co" job="complete" id="${id}"></i><p class="text ${LINE}">${toDo}</p><i class="fa fa-trash-o de" job="delete" id="${id}"></i></li>`;

    const position = "beforeend";

    list.insertAdjacentHTML(position, item);

    var total: HTMLElement = document.querySelector("#summe");
    total.innerHTML = LIST.length;
}

//addToDo("drink coffe"); // TEST: fügt der Liste den eintrag drink coffe hinzu

// add an item to the list if user press the enter key

document.addEventListener("keyup",function(even) {
    if(event.keyCode == 13){        // 13 ist keycode von Enter Taste, wenn also enter gedrückt wird dann...

        const toDo = input.value;

        // if the input ist nicht leer
        if(toDo){
            addToDo(toDo, id, false, false); //füge das Wort hinzu

            LIST.push({         //füge values oder/bzw items zur LIST Array 
                name : toDo,
                id : id,
                done : false,
                trash : false
            }); 

            // item wird lokal gespeichert (muss überall dort sein wo die LIST geupdatet wird)
            localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
        }
        input.value = ""; //lösche es aus dem add to do Feld
    }
});

//addToDo("Coffee", 1, true, false); // TEST: füge Coffee hinzu, mit der id 1, den checked Kreis, und streicht das Wort durch wie in css definiert

// wenn man auf item klickt damit es als completed angezeigt wird
function completeToDo(element){
    element.classList.toggle(CHECK); // .classList.toggle bedeutet man switched/schaltet um/toggelt zwischen den Klassen/classes
    element.classList.toggle(UNCHECK); // hier also toggle zwischen check und uncheck
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH); // .parentNode = was dem Element übergeordnet ist

    LIST[element.id].done = LIST[element.id].done ? false : true; // false if true und true if false
}

// remove Item wenn Trash Icon geklickt

function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

// die neu hinzugefügten wörter sollen gezielt ausgewählt werden

list.addEventListener("click", function(event){
    const element = event.target; //return clicked element inside list
    const elementJob = element.attributes.job.value; //fertig oder löschen

    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }

    // item wird lokal gespeichert (muss überall dort sein wo die LIST geupdatet wird)
    localStorage.setItem("TODO", JSON.stringify(LIST));
}); 
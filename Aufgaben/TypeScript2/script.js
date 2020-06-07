"use strict";
// var all18: number = europe18 + na18 + sa18 + af18 + asi18 + aus18;
// console.log (all18);
// Europa -------------------------------------------------------------
var europe08 = 4965.7;
var europe18 = 4209.3;
// var relativeu: number = 100 / all18 * europe18;
var relativeu = 100 / (49010.4 / 4209.3);
var growtheu = (europe18 - europe08) / europe08;
var growthEUabsolute = europe18 - europe08;
var eu0 = "Carbon Dioxide Emissions in Europe";
var eu1 = "kg CO2";
var eu2 = "Emission absolute of Europe in 2018";
var eu3 = "%";
var eu4 = "Relative to total world's emission";
var eu5 = "%";
var eu6 = "Growth rate between 2008 and 2018 (in %)";
var eu7 = "kg CO2";
var eu8 = "Growth rate between 2008 and 2018 (absolute)";
function europa() {
    document.querySelector("#region").innerHTML = eu0;
    document.querySelector("#h21").innerHTML = europe18 + eu1;
    document.querySelector("#p1").innerHTML = eu2;
    document.querySelector("#h22").innerHTML = relativeu.toFixed(2) + eu3;
    document.querySelector("#p2").innerHTML = eu4;
    document.querySelector("#h23").innerHTML = growtheu.toFixed(2) + eu5;
    document.querySelector("#p3").innerHTML = eu6;
    document.querySelector("#h24").innerHTML = growthEUabsolute.toFixed(2) + eu7;
    document.querySelector("#p4").innerHTML = eu8;
    document.querySelector(".chart").setAttribute('style', 'height:' + relativeu + 'px');
}
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", europa);
});
// Europa Ende -------------------------------------------------------------
// Nord Amerika -------------------------------------------------------------
var na08 = 6600.4;
var na18 = 6035.6;
var relativna = 100 / (67756.80 / 6035.6);
var growthna = (na18 - na08) / na08;
var growthNAabsolute = na18 - na08;
var na0 = "Carbon Dioxide Emissions in North America";
var na1 = "kg CO2";
var na2 = "Emission absolute of North America in 2018";
var na3 = "%";
var na4 = "Relative to total world's emission";
var na5 = "%";
var na6 = "Growth rate between 2008 and 2018 (in %)";
var na7 = "kg CO2";
var na8 = "Growth rate between 2008 and 2018 (absolute)";
function nordamerika() {
    document.querySelector("#region").innerHTML = na0;
    document.querySelector("#h21").innerHTML = na18 + na1;
    document.querySelector("#p1").innerHTML = na2;
    document.querySelector("#h22").innerHTML = relativna.toFixed(2) + na3;
    document.querySelector("#p2").innerHTML = na4;
    document.querySelector("#h23").innerHTML = growthna.toFixed(2) + na5;
    document.querySelector("#p3").innerHTML = na6;
    document.querySelector("#h24").innerHTML = growthNAabsolute.toFixed(2) + na7;
    document.querySelector("#p4").innerHTML = na8;
    document.querySelector(".chart").setAttribute('style', 'height:' + relativna + 'px');
}
window.addEventListener("load", function () {
    document.querySelector(".northamerica").addEventListener("click", nordamerika);
});
// Nord Amerika Ende -------------------------------------------------------------
// Süd Amerika -------------------------------------------------------------
var sa08 = 1132.6;
var sa18 = 1261.5;
var relativsa = 100 / (13664.70 / 1261.5);
var growthsa = (sa18 - sa08) / sa08;
var growthSAabsolute = sa18 - sa08;
var sa0 = "Carbon Dioxide Emissions in South America";
var sa1 = "kg CO2";
var sa2 = "Emission absolute of South America in 2018";
var sa3 = "%";
var sa4 = "Relative to total world's emission";
var sa5 = "%";
var sa6 = "Growth rate between 2008 and 2018 (in %)";
var sa7 = "kg CO2";
var sa8 = "Growth rate between 2008 and 2018 (absolute)";
function sudamerika() {
    document.querySelector("#region").innerHTML = sa0;
    document.querySelector("#h21").innerHTML = sa18 + sa1;
    document.querySelector("#p1").innerHTML = sa2;
    document.querySelector("#h22").innerHTML = relativsa.toFixed(2) + sa3;
    document.querySelector("#p2").innerHTML = sa4;
    document.querySelector("#h23").innerHTML = growthsa.toFixed(2) + sa5;
    document.querySelector("#p3").innerHTML = sa6;
    document.querySelector("#h24").innerHTML = growthSAabsolute.toFixed(2) + sa7;
    document.querySelector("#p4").innerHTML = sa8;
    document.querySelector(".chart").setAttribute('style', 'height:' + relativsa + 'px');
}
window.addEventListener("load", function () {
    document.querySelector(".southamerica").addEventListener("click", sudamerika);
});
// Süd Amerika Ende -------------------------------------------------------------
// Afrika -------------------------------------------------------------
var af08 = 1028;
var af18 = 1235.50;
var relativaf = 100 / (12433.40 / 1235.50);
var growthaf = (af18 - af08) / af08;
var growthAFabsolute = af18 - af08;
var af0 = "Carbon Dioxide Emissions in Africa";
var af1 = "kg CO2";
var af2 = "Emission absolute of Africa in 2018";
var af3 = "%";
var af4 = "Relative to total world's emission";
var af5 = "%";
var af6 = "Growth rate between 2008 and 2018 (in %)";
var af7 = "kg CO2";
var af8 = "Growth rate between 2008 and 2018 (absolute)";
function afrika() {
    document.querySelector("#region").innerHTML = af0;
    document.querySelector("#h21").innerHTML = af18 + af1;
    document.querySelector("#p1").innerHTML = af2;
    document.querySelector("#h22").innerHTML = relativaf.toFixed(2) + af3;
    document.querySelector("#p2").innerHTML = af4;
    document.querySelector("#h23").innerHTML = growthaf.toFixed(2) + af5;
    document.querySelector("#p3").innerHTML = af6;
    document.querySelector("#h24").innerHTML = growthAFabsolute.toFixed(2) + af7;
    document.querySelector("#p4").innerHTML = af8;
    document.querySelector(".chart").setAttribute('style', 'height:' + relativaf + 'px');
}
window.addEventListener("load", function () {
    document.querySelector(".africa").addEventListener("click", afrika);
});
// Afrika Ende -------------------------------------------------------------
// Asien -------------------------------------------------------------
var asi08 = 12954.70;
var asi18 = 16274.10;
var relativasi = 100 / (166214.30 / 16274.10);
var growthasi = (asi18 - asi08) / asi08;
var growthASIabsolute = asi18 - asi08;
var asi0 = "Carbon Dioxide Emissions in Asia";
var asi1 = "kg CO2";
var asi2 = "Emission absolute of Asia in 2018";
var asi3 = "%";
var asi4 = "Relative to total world's emission";
var asi5 = "%";
var asi6 = "Growth rate between 2008 and 2018 (in %)";
var asi7 = "kg CO2";
var asi8 = "Growth rate between 2008 and 2018 (absolute)";
function asien() {
    document.querySelector("#region").innerHTML = asi0;
    document.querySelector("#h21").innerHTML = asi18 + asi1;
    document.querySelector("#p1").innerHTML = asi2;
    document.querySelector("#h22").innerHTML = relativasi.toFixed(2) + asi3;
    document.querySelector("#p2").innerHTML = asi4;
    document.querySelector("#h23").innerHTML = growthasi.toFixed(2) + asi5;
    document.querySelector("#p3").innerHTML = asi6;
    document.querySelector("#h24").innerHTML = growthASIabsolute.toFixed(2) + asi7;
    document.querySelector("#p4").innerHTML = asi8;
    document.querySelector(".chart").setAttribute('style', 'height:' + relativasi + 'px');
}
window.addEventListener("load", function () {
    document.querySelector(".asia").addEventListener("click", asien);
});
// Asien Ende -------------------------------------------------------------
// Australien -------------------------------------------------------------
var aus08 = 1993;
var aus18 = 2100.50;
var relativaus = 100 / (22034.50 / 2100.50);
var growthaus = (aus18 - aus08) / aus08;
var growthAUSabsolute = aus18 - aus08;
var aus0 = "Carbon Dioxide Emissions in Australia";
var aus1 = "kg CO2";
var aus2 = "Emission absolute of Australia in 2018";
var aus3 = "%";
var aus4 = "Relative to total world's emission";
var aus5 = "%";
var aus6 = "Growth rate between 2008 and 2018 (in %)";
var aus7 = "kg CO2";
var aus8 = "Growth rate between 2008 and 2018 (absolute)";
function australien() {
    document.querySelector("#region").innerHTML = aus0;
    document.querySelector("#h21").innerHTML = aus18 + aus1;
    document.querySelector("#p1").innerHTML = aus2;
    document.querySelector("#h22").innerHTML = relativaus.toFixed(2) + aus3;
    document.querySelector("#p2").innerHTML = aus4;
    document.querySelector("#h23").innerHTML = growthaus.toFixed(2) + aus5;
    document.querySelector("#p3").innerHTML = aus6;
    document.querySelector("#h24").innerHTML = growthAUSabsolute.toFixed(2) + aus7;
    document.querySelector("#p4").innerHTML = aus8;
    document.querySelector(".chart").setAttribute('style', 'height:' + relativaus + 'px');
}
window.addEventListener("load", function () {
    document.querySelector(".australia").addEventListener("click", australien);
});
// Australien Ende -------------------------------------------------------------
function Footer() {
    document.querySelector("#footer").innerHTML = "Values in kg CO2 per TJ. Source statista.com";
}
window.addEventListener("load", function () {
    document.querySelector("#footer").addEventListener("click", Footer);
});
// Console Ausgabe aus Aufgabe #5
/*
console.group("Europa");

var europe08: number = 4965.7;
var europe18: number = 4209.3;

var relativeu: number = 100 / (49010.4 / 4209.3);
var growtheu: number = (europe18 - europe08) / europe08;
var growthEUabsolute: number = europe18 - europe08;

var eu1: string = "Die Emission von Europa war 2018:";
var eu2: string = "kg CO2.";
var eu3: string = "Relativ zur Gesamtemission der Welt verursachte Europa damit";
var eu4: string = "%.";
var eu5: string = "Für Europa hatte sich 2018 im Vergleich zu 2008 die Emission um";
var eu6: string = "% verändert.";
var eu7: string = "2018 im Vergleich zu 2008 waren das";
var eu8: string = "kg CO2.";

console.log(eu1 + " " + europe18 + eu2);
console.log(eu3 + " " + relativeu + eu4);
console.log(eu5 + " " + growtheu + eu6);
console.log(eu7 + " " + growthEUabsolute + eu8);

console.groupEnd();
console.log("");



console.group("Nord Amerika");

var na08: number = 6600.4;
var na18: number = 6035.6;

var relativna: number = 100 / (67756.80 / 6035.6);
var growthna: number = (na18 - na08) / na08;
var growthNAabsolute: number = na18 - na08;

var na1: string = "Die Emission von Nord Amerika war 2018:";
var na2: string = "kg CO2.";
var na3: string = "Relativ zur Gesamtemission der Welt verursachte Europa damit";
var na4: string = "%.";
var na5: string = "Für Europa hatte sich 2018 im Vergleich zu 2008 die Emission um";
var na6: string = "% verändert.";
var na7: string = "2018 im Vergleich zu 2008 waren das";
var na8: string = "kg CO2.";

console.log(na1 + " " + na18 + na2);
console.log(na3 + " " + relativna + na4);
console.log(na5 + " " + growthna + na6);
console.log(na7 + " " + growthNAabsolute + na8);

console.groupEnd();
console.log("");



console.group("Süd Amerika");

var sa08: number = 1132.6;
var sa18: number = 1261.5;

var relativsa: number = 100 / (13664.70 / 1261.5);
var growthsa: number = (sa18 - sa08) / sa08;
var growthSAabsolute: number = sa18 - sa08;

var sa1: string = "Die Emission von Nord Amerika war 2018:";
var sa2: string = "kg CO2.";
var sa3: string = "Relativ zur Gesamtemission der Welt verursachte Europa damit";
var sa4: string = "%.";
var sa5: string = "Für Europa hatte sich 2018 im Vergleich zu 2008 die Emission um";
var sa6: string = "% verändert.";
var sa7: string = "2018 im Vergleich zu 2008 waren das";
var sa8: string = "kg CO2.";

console.log(sa1 + " " + sa18 + sa2);
console.log(sa3 + " " + relativsa + sa4);
console.log(sa5 + " " + growthsa + sa6);
console.log(sa7 + " " + growthSAabsolute + sa8);

console.groupEnd();
console.log("");



console.group("Afrika");

var af08: number = 1028;
var af18: number = 1235.50;

var relativaf: number = 100 / (12433.40 / 1235.50);
var growthaf: number = (af18 - af08) / af08;
var growthAFabsolute: number = af18 - af08;

var af1: string = "Die Emission von Nord Amerika war 2018:";
var af2: string = "kg CO2.";
var af3: string = "Relativ zur Gesamtemission der Welt verursachte Europa damit";
var af4: string = "%.";
var af5: string = "Für Europa hatte sich 2018 im Vergleich zu 2008 die Emission um";
var af6: string = "% verändert.";
var af7: string = "2018 im Vergleich zu 2008 waren das";
var af8: string = "kg CO2.";

console.log(af1 + " " + af18 + af2);
console.log(af3 + " " + relativaf + af4);
console.log(af5 + " " + growthaf + af6);
console.log(af7 + " " + growthAFabsolute + af8);

console.groupEnd();
console.log("");



console.group("Asien");

var asi08: number = 12954.70;
var asi18: number = 16274.10;

var relativasi: number = 100 / (166214.30 / 16274.10);
var growthasi: number = (asi18 - asi08) / asi08;
var growthASIabsolute: number = asi18 - asi08;

var asi1: string = "Die Emission von Nord Amerika war 2018:";
var asi2: string = "kg CO2.";
var asi3: string = "Relativ zur Gesamtemission der Welt verursachte Europa damit";
var asi4: string = "%.";
var asi5: string = "Für Europa hatte sich 2018 im Vergleich zu 2008 die Emission um";
var asi6: string = "% verändert.";
var asi7: string = "2018 im Vergleich zu 2008 waren das";
var asi8: string = "kg CO2.";

console.log(asi1 + " " + asi18 + asi2);
console.log(asi3 + " " + relativasi + asi4);
console.log(asi5 + " " + growthasi + asi6);
console.log(asi7 + " " + growthASIabsolute + asi8);

console.groupEnd();
console.log("");



console.group("Australien");

var aus08: number = 1993;
var aus18: number = 2100.50;

var relativaus: number = 100 / (22034.50 / 2100.50);
var growthaus: number = (aus18 - aus08) / aus08;
var growthAUSabsolute: number = aus18 - aus08;

var aus1: string = "Die Emission von Nord Amerika war 2018:";
var aus2: string = "kg CO2.";
var aus3: string = "Relativ zur Gesamtemission der Welt verursachte Europa damit";
var aus4: string = "%.";
var aus5: string = "Für Europa hatte sich 2018 im Vergleich zu 2008 die Emission um";
var aus6: string = "% verändert.";
var aus7: string = "2018 im Vergleich zu 2008 waren das";
var aus8: string = "kg CO2.";

console.log(aus1 + " " + aus18 + aus2);
console.log(aus3 + " " + relativaus + aus4);
console.log(aus5 + " " + growthaus + aus6);
console.log(aus7 + " " + growthAUSabsolute + aus8);

console.groupEnd();
*/ 
//# sourceMappingURL=script.js.map
let uitleg = "In een parkeergarage passen 80 auto's op de begane grond en 120 op een verdieping.\n"+
"Vraag het gewenste aantal auto's in de garage en bereken het aantal verdiepingen wat je nodig hebt.";

alert(uitleg);
let gewenste_aantal_autos = prompt("Hoeveel autos wilt u kwijt in de parkeergarage?");
let berekening = Math.ceil((gewenste_aantal_autos - 80) / 120);

document.getElementById("antwoord").innerText = berekening;
alert(berekening);
console.log(berekening)


console.log("Om het gewenste aantal autos kwijt te kunnen heb ik x verdiepingen nodig.")


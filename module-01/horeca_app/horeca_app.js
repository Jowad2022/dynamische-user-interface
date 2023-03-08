//Jowad Al fartousy

// berekening van de prijs van de bestelling.
function prijzen(bestelling, hoeveel, prijs){
    totaal_prijs = hoeveel * prijs
    document.write(hoeveel + " " + bestelling + " " + "€" +totaal_prijs + "<br>")
    return totaal_prijs
}

menu = ["beer", "fris", "wijn"]

bier = 0
fris = 0
wijn = 0
totaal = 0

//bestellen van drinken.
stoppen = true
while (stoppen) {
    bestelling = prompt("Wat wilt u bestellen\n"+"Drinken menu is beer €3/fris €2/wijn €4.");
    if (menu.includes(bestelling)){
        hoeveel = Number(prompt("Hoeveel "+ bestelling +" wilt u bestellen?"));
        if(bestelling == "beer"){
            bier = bier + hoeveel
        } else if(bestelling == "fris"){
            fris = fris + hoeveel
        } else if(bestelling == "wijn"){
            wijn = wijn + hoeveel
        }
        // meer bestellen of stoppen.
        opnieuw = prompt("wilt u meer bestellen");
        if (opnieuw == "ja"){
        }else{
            stoppen = false;
        }    
    }else{
        alert("Dit is niet in het menu")
    }
}
//bon maken met alles wat besteld is en prijzen.
if (bier > 0) {
    totaal = totaal + prijzen("beer", bier, 3);
}
if (fris > 0){
    totaal = totaal + prijzen("fris", fris, 2);
}
if (wijn > 0){
    totaal = totaal + prijzen("wijn", wijn, 4);
}
document.write("<br>"+"---------------"+"<br>")
document.write("€"+totaal)

console.log(totaal)
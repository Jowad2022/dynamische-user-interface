function change(nummer){
    document.getElementById("img").src="images/"+nummer+".jpg" ;
    document.getElementById("container").style.backgroundImage="url(images/bg"+nummer+".jpg)" ;
    document.getElementById(nummer).innerHTML= Number(document.getElementById(nummer).innerHTML) + 1 
}

var image = document.getElementById("image");

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"

postitionLeft = 50
postitionTop = 50
postitionX = 0

var diff = 84
var drive = 5

function moveRight() {
        image.style.backgroundPosition = `${postitionX}px 0px`
        image.style.left = `${postitionLeft}px`
        if (image.style.transform = "rotate(360deg)"){
            image.style.transform = "rotate(440deg)"
        }else{
            image.style.transform = "rotate(90deg)"
        }
        
            image.style.transition
        postitionX = postitionX + diff
        postitionLeft = postitionLeft + drive
}
function MoveLeft(){
    image.style.backgroundPosition = `${postitionX}px 0px`
    image.style.left = `${postitionLeft}px`
    if (image.style.transform = "rotate(180deg)"){
        image.style.transform = "rotate(270deg)"
    }else{
        image.style.transform = "rotate(-90deg)"
    }
    postitionX = postitionX - diff
    postitionLeft = postitionLeft - drive
}
function moveDown(){
    image.style.backgroundPosition = `${postitionX}px 0px`
    image.style.top = `${postitionTop}px`
    image.style.transform = "rotate(180deg)"
    postitionX = postitionX + diff
    postitionTop = postitionTop + drive
}
function moveUp(){
    image.style.backgroundPosition = `${postitionX}px 0px`
    image.style.top = `${postitionTop}px`
    if (image.style.transform = "rotate(270deg)"){
        image.style.transform = "rotate(360deg)"
    }else if(image.style.transform = "rotate(270deg)"){
        image.style.transform = "rotate(360deg)"
    }else{
        image.style.transform = "rotate(0deg)"
    }
    
    postitionX = postitionX - diff
    postitionTop = postitionTop - drive
}

function checkKey(e) {
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if(e.keyCode == 32){
    	console.log("spacebar");
        rotate
    } else if (e.keyCode == '38') {  // up arrow
        console.log("Up arrow");
        moveUp()
    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
        moveDown()
    } else if (e.keyCode == '37') { // left arrow
    	console.log("left arrow");
        MoveLeft()
    } else if (e.keyCode == '39') {   // right arrow
        moveRight()
    	console.log("right arrow"); // check goed de rupsband
    }
}
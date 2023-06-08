// itslearning shuffle code
// animalLijst = ['lion', 'lobster', 'seagull', 'skunk', 'turtle', 'bear', 'deer', 'frog', 'horse'];
// animalLijst = shuffle(animalLijst);
// function shuffle(array){
//     let currentIndex = array, length, randomIndex;

//     //While there remain elements to shuffle,
//     while (currentIndex != 0) {

//     // Pick a remaining element.
//     randomIndex = Math.floor (Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//         [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
//     }

//     return array;
// }
// code online game
var library = {
    pokemon: [
    'https://res.cloudinary.com/beumsk/image/upload/v1547980025/memory/Pokemon/Bulbasaur.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980083/memory/Pokemon/Charmander.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980101/memory/Pokemon/Squirtle.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980116/memory/Pokemon/Pikachu.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980129/memory/Pokemon/Mewtwo.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980142/memory/Pokemon/Mew.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980154/memory/Pokemon/Articuno.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980164/memory/Pokemon/Zapdos.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980175/memory/Pokemon/Moltres.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980186/memory/Pokemon/Eevee.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980025/memory/Pokemon/Bulbasaur.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980083/memory/Pokemon/Charmander.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980101/memory/Pokemon/Squirtle.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980116/memory/Pokemon/Pikachu.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980129/memory/Pokemon/Mewtwo.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980142/memory/Pokemon/Mew.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980154/memory/Pokemon/Articuno.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980164/memory/Pokemon/Zapdos.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980175/memory/Pokemon/Moltres.png',
    'https://res.cloudinary.com/beumsk/image/upload/v1547980186/memory/Pokemon/Eevee.png'
    ],
}
var images = [library];
var tempElt1 = "";
var tempElt2 = "";
var click = -1;
var win = 0;
var score = 0;
var time = 0;

var preElt = document.querySelector("#pre");
var themesElt = document.querySelector("#themes");
var boxElts = document.getElementsByClassName("box");
var mainElt = document.querySelector(".main");
var timeElt = document.querySelector("#time");
var scoreElt = document.querySelector("#score");
var postElt = document.querySelector("#post");
var finalElt = document.querySelector("#final");
var againElt = document.querySelector("#again");

// code voor de div's
var toAdd = document.createDocumentFragment();
for(var i=0; i < 11; i++){
    var newDiv = document.createElement('div');
    newDiv.className = "box play";
    toAdd.appendChild(newDiv);
}

document.appendChild(toAdd);
// Handle the play
mainElt.addEventListener("click", gameLogic);

function gameLogic(e) {
  // make sure the box is playable
if (e.target.classList.contains("play")) {
e.target.firstChild.classList.remove("hidden");
// first of two click
if (click < 1) {
    tempElt1 = e.target;
    // timer
    if (click === -1) {
    timer = setInterval(function() {
        time++;
        timeElt.innerHTML = time;
    }, 1000);
    }
    click = 1;
}

// second click
else if (e.target !== tempElt1) {
    tempElt2 = e.target;

    // different images
    if (tempElt1.firstChild.src !== tempElt2.firstChild.src) {
    mainElt.removeEventListener("click", gameLogic);
    setTimeout( function() {
        tempElt1.firstChild.classList.add("hidden");
        tempElt2.firstChild.classList.add("hidden");
        mainElt.addEventListener("click", gameLogic);
    }, 400);
    if (score > 0) {
        score -= 2;
    }
    scoreElt.innerHTML = score;
    }

    // same images
    else {
    score += 10;
    win += 2;
    tempElt1.firstChild.classList.add("outlined");
    tempElt2.firstChild.classList.add("outlined");
    tempElt1.classList.remove("play");
    tempElt2.classList.remove("play");
    scoreElt.innerHTML = score;

    // game won
    if (win === 20) {
        clearInterval(timer);
        finalElt.innerHTML = "You won " + score + " points <br> in " + time + " seconds";
        postElt.classList.remove("hidden");
    }
    }
    click = 0;
}
}
}

againElt.addEventListener("click", resetGame);

function resetGame() {
  // reset game
    tempElt1 = "";
    tempElt2 = "";
    click = -1;
    win = 0;
    score = 0;
    time = 0;
    postElt.classList.add("hidden");
    preElt.classList.remove("hidden");
    for (let i = 0; i < 20; i++) {
        boxElts[i].classList.add("play");
        boxElts[i].firstChild.classList.add("hidden");
    }
    timeElt.textContent = time;
    scoreElt.textContent = score;
}

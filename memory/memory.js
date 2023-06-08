// Array of image URLs
const imageUrls = [
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
    ];
    
    // Function to shuffle array elements randomly
    function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    }
    
    // Function to create buttons with randomized images
    function createButtonsWithImages() {
    const container = document.getElementById("buttonContainer");
    
    // Double the image URLs to have pairs for the memory game
    const pairedImageUrls = [...imageUrls, ...imageUrls];
    
    // Randomize the paired image URLs array
    const randomizedUrls = shuffleArray(pairedImageUrls);
    
    let flippedCards = []; // Track the flipped cards
    let matchedCount = 0; // Track the count of matched cards
    
    for (let i = 0; i < randomizedUrls.length; i++) {
    // Create button element
    const newButton = document.createElement("button");
    newButton.classList.add("button");
    
    // Create image element
    const image = document.createElement("img");
    image.src = randomizedUrls[i];
    image.classList.add("hidden");
    
    // Append the image to the button
    newButton.appendChild(image);
    
  // Add event listener to the button
    newButton.addEventListener("click", function () {
        // Prevent flipping more than two cards simultaneously
        if (flippedCards.length === 2) {
        return;
        }
    
        // Flip the card
        newButton.classList.add("flipped");
        image.classList.remove("hidden");
    
        // Add the flipped card to the array
        flippedCards.push({ button: newButton, image: image });
    
        // Check if two cards are flipped
        if (flippedCards.length === 2) {
        // Get the first and second flipped cards
        const firstCard = flippedCards[0];
        const secondCard = flippedCards[1];
    
        // Check if the images match
        if (firstCard.image.src === secondCard.image.src) {
            // Cards match
            flippedCards = [];
    
            matchedCount += 2;
    
            // Check if all cards are matched
            if (matchedCount === randomizedUrls.length) {
            // All cards are matched
            alert("Congratulations! You have matched all the cards!");
            }
        } else {
            // Cards don't match, flip them back after a delay
            setTimeout(function () {
            firstCard.button.classList.remove("flipped");
            secondCard.button.classList.remove("flipped");
            firstCard.image.classList.add("hidden");
            secondCard.image.classList.add("hidden");
            flippedCards = [];
            }, 1000);
        }
        }
    });

    
    // Append the button to the container
    container.appendChild(newButton);
    }
    }
    
    // Call the function to create buttons with randomized images
    createButtonsWithImages();
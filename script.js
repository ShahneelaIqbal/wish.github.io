const playButton = document.getElementById('playButton');

const wishButton = document.getElementById('wishButton');
const funnyWish = document.getElementById('funnyWish');

const audio = new Audio('Chhote .mp3'); 

playButton.addEventListener('click', () => {
    audio.play();

    // Hide the play button after the song starts playing
    playButton.style.display = 'none';

    setTimeout(() => {
        wishButton.style.display = 'block';
    }, 100); 
});

wishButton.addEventListener('click', () => {
    funnyWish.innerHTML = "To my amazing sister-in-law, who brings joy, laughter, and the best excuses for eating cake—have a fabulous birthday. Remember, calories do not count today. Lets celebrate with cake, laughter, and absolutely no talk about how old were getting!";
    funnyWish.style.display = 'block';

    wishButton.style.display = 'none';
});

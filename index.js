

    //Array of sounds:

    
        const sounds = [
            'sounds/fart.mp3',
            'sounds/burp.mp3',
            'sounds/monkey.mp3',
            'sounds/fart2.mp3',
           ];

          
        //Function that chooses a random sound from an array of sounds


    // const trumpClick = document.querySelector('.trump-img');

     //for (let i = 0; i< trumpClick; i++) {
        document.querySelector(".trump-img").addEventListener("click", function() {
            let audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
            audio.play();
            
        })
  


document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const trump = document.querySelector(".trump-img");
        trump.src = "/images/ufo.png";
        document.addEventListener('keypress', function (e) {
         if (e.key === 'Enter') {
           trump.classList.add('img-new');        
         }
        });
    }
});

const scrollColor = document.querySelector('body');

document.addEventListener('scroll', function(){
    scrollColor.style.backgroundColor = "yellow";
});

